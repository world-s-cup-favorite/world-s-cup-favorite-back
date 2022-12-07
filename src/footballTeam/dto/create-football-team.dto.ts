import { IsIn, IsNumber, IsString, Min, MinLength } from "class-validator";
import { Groups } from "../../groups/entities/group.entity";

export class FootballTeamDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsString()
  flag: string;

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
