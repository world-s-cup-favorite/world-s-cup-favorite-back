import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

import { User } from "./entities/user.entity";
import { Model, isValidObjectId } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

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
      if (error.code === 11000) {
        throw new BadRequestException(
          `El usuario existe en la base de datos ${JSON.stringify(
            error.keyvalue
          )}`
        );
      }
      console.log(error);
      throw new InternalServerErrorException();
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

    return user;
  }

  async update(term: string, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(term);
    if (updateUserDto.name)
      updateUserDto.name = updateUserDto.name.toUpperCase();

    await user.updateOne(updateUserDto);

    return { ...user.toJSON(), ...updateUserDto };
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  fillCountriesSeedDate(users: User[]) {}
}
