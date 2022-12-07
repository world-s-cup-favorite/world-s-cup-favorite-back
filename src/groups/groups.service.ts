import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { validate as IsUUID } from "uuid";
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { CreateGroupDto } from "./dto/create-group.dto";
import { UpdateGroupDto } from "./dto/update-group.dto";
import { Groups } from "./entities/group.entity";
import { handleException as handleDBException } from "src/exeptions/handleExetions.exception";

@Injectable()
export class GroupsService {
  constructor(
    @InjectRepository(Groups)
    private readonly groupRepository: Repository<Groups>
  ) {}

  async create(createGroupDto: CreateGroupDto): Promise<Groups> {
    try {
      const group = this.groupRepository.create(createGroupDto);
      await this.groupRepository.save(group);
      return group;
    } catch (error) {
      handleDBException(error, "Team");
    }
  }

  async findAll(): Promise<Groups[]> {
    return await this.groupRepository.find();
  }

  async findOne(term: string): Promise<Groups> {
    let group: Groups;

    // uuID
    if (IsUUID(term)) {
      group = await this.groupRepository.findOneBy({
        idGroup: term,
      });
    }
    //name
    if (!group) {
      group = await this.groupRepository.findOneBy({
        name: term,
      });
    }
    // no se fount
    if (!group)
      throw new NotFoundException(
        `El group con el uuId,nombre"${term}" no encontrado `
      );
    return group;
  }

  async update(id: string, updateGroupDto: UpdateGroupDto): Promise<Groups> {
    try {
      const group = await this.groupRepository.preload({
        idGroup: id,
        ...updateGroupDto,
      });
      await this.groupRepository.save(group);

      return group;
    } catch (error) {
      handleDBException(error, "group");
    }
  }

  async remove(id: string): Promise<Groups> {
    try {
      const deletedGroup = await this.findOne(id);
      await this.groupRepository.delete(deletedGroup);
      if (!deletedGroup) {
        throw new BadRequestException(
          `el   team con el id "${id}" no encontrado`
        );
      }
      return deletedGroup;
    } catch (error) {}
  }
}
