import { IsArray, IsString, MinLength } from "class-validator";
import { FootBallTeam } from "../../footballTeam/entities/footballTeam.entity";

export class CreateGroupDto {
  @IsString()
  @MinLength(1)
  name: string;

  @IsArray()
  team: FootBallTeam[];
}
