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
import { Repository } from "typeorm";
import { validate as IsUUID } from "uuid";
import { Groups } from "./entities/group.entity";
import { group } from "console";

@Injectable()
export class FootballTeamService {
  private readonly logger = new Logger("FootballTeamService");
  constructor(
    @InjectRepository(FootBallTeams)
    private readonly footBallTeamRepository: Repository<FootBallTeams>,
    @InjectRepository(Groups)
    private readonly groupRepository: Repository<Groups>
  ) {}

  async create(footTeamDto: FootballTeamDto): Promise<FootBallTeams> {
    footTeamDto.name = footTeamDto.name.toUpperCase();
    try {
      const { group, ...detailsTeams } = footTeamDto;
      if (await this.groupRepository.findOneBy({ name: group })) {
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
      footBallTeam = await this.footBallTeamRepository.findOneBy({
        idTeam: term,
      });
    }
    //name
    if (!footBallTeam) {
      footBallTeam = await this.footBallTeamRepository.findOneBy({
        name: term,
      });
    }
    // no se encontro
    if (!footBallTeam)
      throw new NotFoundException(
        `El país con el MongoId,nombre o noCountry"${term}" no encontrado `
      );
    return footBallTeam;
  }

  async update(term: string, updateFootBallTeamDto: UpdateFootballTeamDto) {
    // if (updateFootBallTeamDto.name)
    //   updateFootBallTeamDto.name = updateFootBallTeamDto.name.toUpperCase();
    // try {
    //   const country = await this.footBallTeamRepository.preload({
    //     idTeam: term,
    //     ...updateFootBallTeamDto,
    //   });
    //   this.footBallTeamRepository.save(country);
    //   return country;
    // } catch (error) {
    //   handleException(error, "Country");
    // }
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

  async fillCountriesSeedDate(countries: FootballTeamDto[]) {
    const footBallTeam = countries.map((e) => {
      e.name = e.name.toUpperCase();
      return e;
    });
  }
}
