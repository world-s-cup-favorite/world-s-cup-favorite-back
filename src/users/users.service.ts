import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

import { User } from "./entities/user.entity";
import { Model, isValidObjectId } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { handleException } from "../exeptions/handleExetions.exception";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>
  ) {}

  async create(createUserDto: CreateUserDto) {
    createUserDto.name = createUserDto.name.toUpperCase();
    try {
      const user = await this.userModel.create(createUserDto);
      return user;
    } catch (error) {
      handleException(error, "usuario");
    }
  }

  findAll() {
    return {};
  }

  async findOne(term: string) {
    let user: User;

    // MONGOID
    if (isValidObjectId(term)) {
      user = await this.userModel.findById(term);
    }

    // name
    if (!user) {
      user = await this.userModel.findOne({ name: term });
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
      await user.updateOne(updateUserDto);
      return { ...user.toJSON(), ...updateUserDto };
    } catch (error) {
      handleException(error, "usuario");
    }
  }

  async remove(id: string) {
    const user = await this.findOne(id);
    await user.deleteOne();

    return `el usuario con el mongoID ${user.id} y el nombre ${user.name} eliminado`;
  }

  fillCountriesSeedDate(users: User[]) {}
}
