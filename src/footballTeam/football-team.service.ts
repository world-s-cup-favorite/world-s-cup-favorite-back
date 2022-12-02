import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { handleException } from "src/exeptions/handleExetions.exception";
import { FootballTeamDto } from "./dto/create-football-team.dto";
import { UpdateFootballTeamDto } from "./dto/update-football-team.dto";
import { FootBallTeam } from "./entities/footballTeam.entity";
import { Repository } from "typeorm";

@Injectable()
export class FootballTeamService {
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
      handleException(error, "Country");
    }
  }

  findAll() {}

  async findOne(term: string) {
    let country: FootBallTeam;

    //number
    if (!isNaN(+term)) {
    }

    // MongoID
    if (country) {
    }
    //name
    if (!country) {
    }
    // no se encontro
    if (!country)
      throw new NotFoundException(
        `El país con el MongoId,nombre o noCountry"${term}" no encontrado `
      );
    return country;
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
    const deletedCount = null;

    if (deletedCount == 0)
      throw new BadRequestException(`el  país con el id "${id}" no encontrado`);
    return;
  }

  async fillCountriesSeedDate(countries) {}
}
