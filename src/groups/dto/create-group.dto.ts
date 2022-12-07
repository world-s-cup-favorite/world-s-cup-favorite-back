import { IsArray, IsString, MinLength } from "class-validator";
import { group } from "console";
import { FootBallTeams } from "src/footballTeam/entities/footballTeam.entity";

export class CreateGroupDto {
  @IsString()
  @MinLength(1)
  name: string;
  @IsArray()
  group: FootBallTeams[];
}
