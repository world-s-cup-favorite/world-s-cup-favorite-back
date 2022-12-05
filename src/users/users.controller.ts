import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import {} from "uuid";
import { ParseMongoIdPipe } from "src/common/pipes/parse-mongo-id/parse-mongo-id.pipe";
import { User } from "./entities/user.entity";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(":term")
  findOne(@Param("term") term: string): Promise<User> {
    return this.usersService.findOne(term);
  }

  @Patch(":term")
  update(@Param("term") term: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(term, updateUserDto);
  }

  @Delete(":id")
  remove(@Param("id", ParseUUIDPipe) id: string) {
    return this.usersService.remove(id);
  }
}
