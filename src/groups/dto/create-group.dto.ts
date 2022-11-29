import { IsArray, IsString } from "class-validator";
import { Country } from "../../countries/entities/country.entity";

export class CreateGroupDto {
  @IsString()
  groupName: string;

  @IsArray()
  teams: Country[];
}
