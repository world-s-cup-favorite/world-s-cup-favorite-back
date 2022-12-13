import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { handleException } from "src/exeptions/handleExetions.exception";
import { FootballTeamDto } from "./dto/create-football-team.dto";
import { UpdateFootballTeamDto } from "./dto/update-football-team.dto";
import { FootBallTeams } from "./entities/footballTeam.entity";
import { DataSource, Repository } from "typeorm";
import { validate as IsUUID } from "uuid";
import { Groups } from "./entities/group.entity";

@Injectable()
export class FootballTeamService {
  private readonly logger = new Logger("FootballTeamService");
  constructor(
    @InjectRepository(FootBallTeams)
    private readonly footBallTeamRepository: Repository<FootBallTeams>,
    @InjectRepository(Groups)
    private readonly groupRepository: Repository<Groups>,
    private readonly dataSource: DataSource
  ) {}

  async create(footTeamDto: FootballTeamDto): Promise<FootBallTeams> {
    footTeamDto.name = footTeamDto.name.toUpperCase();
    try {
      const { group, ...detailsTeams } = footTeamDto;
      console.log(group);
      if (
        await this.groupRepository.findOneBy({
          name: group,
        })
      ) {
        console.log("entre");
        const footBallTeam = this.footBallTeamRepository.create({
          ...detailsTeams,
          group: await this.groupRepository.findOneBy({
            name: group,
          }),
        });
        await this.footBallTeamRepository.save(footBallTeam);
        return footBallTeam;
      } else {
        const footBallTeam = this.footBallTeamRepository.create({
          ...detailsTeams,
          group: this.groupRepository.create({
            name: group,
            teams: [detailsTeams],
          }),
        });
        await this.footBallTeamRepository.save(footBallTeam);
        return footBallTeam;
      }
    } catch (error) {
      handleException(error, "Team");
    }
  }

  async findOnePlain(term: string): Promise<FootballTeamDto> {
    //** Dependencia*/
    const { group, ...rest } = await this.findOne(term);
    return {
      ...rest,
      group: group.name,
    };
  }
  //** */
  async findAllTeams(): Promise<FootBallTeams[]> {
    return await this.footBallTeamRepository.find();
  }
  async findAllGroups(): Promise<Groups[]> {
    return await this.groupRepository.find();
  }

  async findOne(term: string): Promise<FootBallTeams> {
    let footBallTeam: FootBallTeams;

    // uuID
    if (IsUUID(term)) {
      const queryBuilder =
        this.footBallTeamRepository.createQueryBuilder("footballTeams");
      footBallTeam = await queryBuilder
        .where("footballTeams.idTeam = :idTeam ", {
          idTeam: term,
        })
        .leftJoinAndSelect("footballTeams.group", "group")
        .getOne();
    } else {
      term.toUpperCase();
      const queryBuilder =
        this.footBallTeamRepository.createQueryBuilder("footballTeams");
      footBallTeam = await queryBuilder
        .where("footballTeams.name = :name ", {
          name: term.toUpperCase(),
        })
        .leftJoinAndSelect("footballTeams.group", "group")
        .getOne();
    }
    if (!footBallTeam)
      throw new NotFoundException(
        `El país con el uuId, nombre "${term}" no encontrado `
      );
    return footBallTeam;
  }

  async update(idTeam: string, updateFootBallTeamDto: UpdateFootballTeamDto) {
    //UpperCase name
    if (updateFootBallTeamDto.name)
      updateFootBallTeamDto.name = updateFootBallTeamDto.name.toUpperCase();
    const { group, ...toUpdate } = updateFootBallTeamDto;

    //query runner
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      if (this.groupRepository.findOneBy({ name: group })) {
        const footballteam = await this.footBallTeamRepository.preload({
          idTeam,
          ...toUpdate,
          group: await this.groupRepository.findOneBy({ name: group }),
        });
        await queryRunner.manager.save(footballteam);
      } else {
        const footballteam = await this.footBallTeamRepository.preload({
          idTeam,
          ...toUpdate,
          group: this.groupRepository.create({ name: group }),
        });
        await queryRunner.manager.save(footballteam);
      }

      // await this.footBallTeamRepository.save(footballteam);
      await queryRunner.commitTransaction();
      await queryRunner.release();

      return this.findOnePlain(idTeam);
    } catch (error) {
      await queryRunner.rollbackTransaction();
      await queryRunner.release();
      handleException(error, "Country");
    }
  }

  async remove(id: string): Promise<FootBallTeams> {
    try {
      const deletedCount = await this.findOne(id);
      await this.footBallTeamRepository.delete(deletedCount);
      if (!deletedCount)
        throw new BadRequestException(
          `el   team con el id "${id}" no encontrado`
        );
      return deletedCount;
    } catch (error) {}
  }

  async deletAll() {
    const footballQuery =
      this.footBallTeamRepository.createQueryBuilder("footballteam");
    const GroupQuery = this.groupRepository.createQueryBuilder("group");

    await footballQuery.delete().where({}).execute();
    await GroupQuery.delete().where({}).execute();
  }
}
