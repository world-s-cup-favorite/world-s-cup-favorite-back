import { IsNumber, IsString, Min, MinLength } from "class-validator";

export class FootballTeamDto {
  @IsString()
  @MinLength(3)
  name: string;
  @IsString()
  group: string;

  @MinLength(12)
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