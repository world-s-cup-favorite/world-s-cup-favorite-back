import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

import { User } from "./entities/user.entity";

import { handleException } from "../exeptions/handleExetions.exception";

@Injectable()
export class UsersService {
  constructor() {}

  async create(createUserDto: CreateUserDto) {
    createUserDto.name = createUserDto.name.toUpperCase();
    try {
    } catch (error) {
      handleException(error, "usuario");
    }
  }

  findAll() {}

  async findOne(term: string) {
    let user: User;

    // MONGOID

    // name
    if (!user) {
      user;
    }

    if (!user)
      throw new NotFoundException(
        `El país con el usuario,nombre"${term}" no encontrado `
      );

    return user;
  }

  async update(term: string, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(term);
    if (updateUserDto.name)
      updateUserDto.name = updateUserDto.name.toUpperCase();

    try {
    } catch (error) {
      handleException(error, "usuario");
    }
  }

  async remove(id: string) {
    const deletedCount = null;

    if (deletedCount == 0)
      throw new BadRequestException(`usuario con el id "${id}" no encontrado`);
    return;
  }

  async fillCountriesSeedDate(users) {
    const user = 0;
    return user;
  }
}
