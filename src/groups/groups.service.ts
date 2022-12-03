import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateGroupDto } from "./dto/create-group.dto";
import { UpdateGroupDto } from "./dto/update-group.dto";
import { Group } from "./entities/group.entity";
import { Repository } from "typeorm";
import { handleException as handleDBException } from "src/exeptions/handleExetions.exception";

@Injectable()
export class GroupsService {
  constructor(
    @InjectRepository(Group)
    private readonly groupRepository: Repository<Group>
  ) {}

  async create(createGroupDto: CreateGroupDto): Promise<Group> {
    try {
      const group = this.groupRepository.create(createGroupDto);
      await this.groupRepository.save(group);
      return group;
    } catch (error) {
      handleDBException(error, "Team");
    }
  }

  async findAll(): Promise<Group[]> {
    return await this.groupRepository.find();
  }

  async findOne(term: string): Promise<Group> {
    let group: Group;

    // uuID
    if (term) {
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
    // no se encontro
    if (!group)
      throw new NotFoundException(
        `El país con el MongoId,nombre o noCountry"${term}" no encontrado `
      );
    return group;
  }

  update(id: number, updateGroupDto: UpdateGroupDto) {
    return `This action updates a #${id} group`;
  }

  remove(id: number) {
    return `This action removes a #${id} group`;
  }
}
