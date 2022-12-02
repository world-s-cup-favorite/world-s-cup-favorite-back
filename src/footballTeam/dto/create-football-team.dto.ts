import { IsIn, IsNumber, IsString, Min, MinLength } from "class-validator";

export class FootballTeamDto {
  @IsString()
  @MinLength(3)
  name: string;

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
  group: string;

  @IsString()
  flag: string;

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
