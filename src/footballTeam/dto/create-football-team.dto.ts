import { IsIn, IsNumber, IsString, Min, MinLength } from "class-validator";
import { Groups } from "../entities/group.entity";

export class FootballTeamDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsString()
  flag: string;
  @IsIn([
    "Group-A",
    "Group-B",
    "Group-C",
    "Group-D",
    "Group-E",
    "Group-F",
    "Group-G",
    "Group-H",
  ])
  @IsString()
  group: string;

  @IsNumber()
  @Min(0)
  favoritePoint: number;

  @IsNumber()
  gamesPlayed: number;

  @IsNumber()
  gamesWon: number;

  @IsNumber()
  lostMatches: number;
}
