import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { FootballTeamService } from "./football-team.service";
import { FootballTeamDto } from "./dto/create-football-team.dto";
import { UpdateFootballTeamDto } from "./dto/update-football-team.dto";
import { ParseMongoIdPipe } from "../common/pipes/parse-mongo-id/parse-mongo-id.pipe";
import { FootBallTeam } from "./entities/footballTeam.entity";

@Controller("countries")
export class FootBallTeamController {
  constructor(private readonly countriesService: FootballTeamService) {}

  @Post()
  create(@Body() createCountryDto: FootballTeamDto): Promise<FootBallTeam> {
    return this.countriesService.create(createCountryDto);
  }

  @Get()
  findAll() {
    return this.countriesService.findAll();
  }

  @Get(":term")
  findOne(@Param("term") term: string) {
    return this.countriesService.findOne(term);
  }

  @Patch(":term")
  update(
    @Param("term") term: string,
    @Body() updateCountryDto: UpdateFootballTeamDto
  ) {
    return this.countriesService.update(term, updateCountryDto);
  }

  @Delete(":id")
  remove(@Param("id", ParseMongoIdPipe) id: string) {
    return this.countriesService.remove(id);
  }
}
