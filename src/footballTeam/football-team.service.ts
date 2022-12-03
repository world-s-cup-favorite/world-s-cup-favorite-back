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
import { FootBallTeam } from "./entities/footballTeam.entity";
import { Repository } from "typeorm";
import e from "express";

@Injectable()
export class FootballTeamService {
  private readonly logger = new Logger("FootballTeamService");
  constructor(
    @InjectRepository(FootBallTeam)
    private readonly footBallTeamRepository: Repository<FootBallTeam>
  ) {}

  async create(footTeamDto: FootballTeamDto): Promise<FootBallTeam> {
    footTeamDto.name = footTeamDto.name.toUpperCase();
    try {
      const footBallTeam = this.footBallTeamRepository.create(footTeamDto);
      await this.footBallTeamRepository.save(footBallTeam);
      return footBallTeam;
    } catch (error) {
      handleException(error, "Team");
    }
  }

  async findAll(): Promise<FootBallTeam[]> {
    return await this.footBallTeamRepository.find();
  }

  async findOne(term: string): Promise<FootBallTeam> {
    let footBallTeam: FootBallTeam;

    // uuID
    if (term) {
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

  async update(term: string, updateCountryDto: UpdateFootballTeamDto) {
    const country = await this.findOne(term);
    if (updateCountryDto.name)
      updateCountryDto.name = updateCountryDto.name.toUpperCase();
    try {
    } catch (error) {
      handleException(error, "Country");
    }
  }

  async remove(id: string) {
    const deletedCount = await this.findOne(id);
    await this.footBallTeamRepository.delete(deletedCount);
    if (!deletedCount)
      throw new BadRequestException(
        `el   team con el id "${id}" no encontrado`
      );
    return deletedCount;
  }

  async fillCountriesSeedDate(countries: FootBallTeam[]) {
    const footBallTeam: FootBallTeam[] = countries.map((e) => {
      e.name = e.name.toUpperCase();
      return e;
    });

    await this.footBallTeamRepository.save(footBallTeam);
  }
}
