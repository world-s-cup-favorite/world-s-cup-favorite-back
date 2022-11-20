import { IsString, MinLength } from "class-validator";

export class CreateUserDto {
  @IsString()
  email: string;
  @IsString()
  @MinLength(3)
  name: string;
  @IsString()
  password: string;
}
