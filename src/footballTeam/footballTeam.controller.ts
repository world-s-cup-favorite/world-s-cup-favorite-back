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
import { Groups } from "./entities/group.entity";
import { UpdateFootballTeamDto } from "./dto/update-football-team.dto";

@Controller("football_team")
export class FootBallTeamController {
  constructor(private readonly countriesService: FootballTeamService) {}

  @Post()
  create(@Body() createCountryDto: FootballTeamDto): Promise<FootBallTeams> {
    return this.countriesService.create(createCountryDto);
  }

  @Get()
  findAllTeams(): Promise<FootBallTeams[]> {
    return this.countriesService.findAllTeams();
  }

  @Get("groups")
  findAllGroup(): Promise<Groups[]> {
    return this.countriesService.findAllGroups();
  }

  @Get(":term")
  findOne(@Param("term") term: string): Promise<FootballTeamDto> {
    return this.countriesService.findOnePlain(term);
  }

  @Patch(":uuid")
  update(
    @Param("uuid", ParseUUIDPipe) term: string,
    @Body() updateCountryDto: UpdateFootballTeamDto
  ) {
    return this.countriesService.update(term, updateCountryDto);
  }

  @Delete(":id")
  remove(@Param("id", ParseUUIDPipe) id: string): Promise<FootBallTeams> {
    return this.countriesService.remove(id);
  }
}
