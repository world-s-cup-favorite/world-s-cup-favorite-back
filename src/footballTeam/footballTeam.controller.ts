import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
} from "@nestjs/common";
import { FootballTeamService } from "./football-team.service";
import { FootballTeamDto } from "./dto/create-football-team.dto";

import { FootBallTeams } from "./entities/footballTeam.entity";

@Controller("football_team")
export class FootBallTeamController {
  constructor(private readonly countriesService: FootballTeamService) {}

  @Post()
  create(@Body() createCountryDto: FootballTeamDto): Promise<FootBallTeams> {
    return this.countriesService.create(createCountryDto);
  }

  @Get()
  findAll(): Promise<FootBallTeams[]> {
    return this.countriesService.findAll();
  }

  @Get(":term")
  findOne(@Param("term") term: string): Promise<FootBallTeams> {
    return this.countriesService.findOne(term);
  }

  // @Patch(":term")
  // update(
  //   @Param("term") term: string,
  //   @Body() updateCountryDto: UpdateFootballTeamDto
  // ): Promise<FootBallTeams> {
  //   return this.countriesService.update(term, updateCountryDto);
  // }

  @Delete(":id")
  remove(@Param("id", ParseUUIDPipe) id: string): Promise<FootBallTeams> {
    return this.countriesService.remove(id);
  }
}
