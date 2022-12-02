import { IsEmail, IsNumber, IsString, MinLength } from "class-validator";

export class CreateUserDto {
  @MinLength(3)
  name: string;
  @IsEmail()
  email: string;
  @IsString()
  password: string;
  @IsNumber()
  age?: number;
  @IsString()
  country: string;
}
