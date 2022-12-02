import { PartialType } from "@nestjs/mapped-types";
import { FootballTeamDto } from "./create-football-team.dto";

export class UpdateFootballTeamDto extends PartialType(FootballTeamDto) {}
