import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

import { User } from "./entities/user.entity";

import { handleException } from "../exeptions/handleExetions.exception";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    createUserDto.name = createUserDto.name.toUpperCase();
    try {
      const user = this.userRepository.create(createUserDto);
      await this.userRepository.save(user);
      return user;
    } catch (error) {
      handleException(error, "usuario");
    }
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(term: string): Promise<User> {
    let user: User;

    //uuid
    if (term) {
      user = await this.userRepository.findOneBy({
        idUser: term,
      });
    }

    if (!user) {
      user = await this.userRepository.findOneBy({ name: term });
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
