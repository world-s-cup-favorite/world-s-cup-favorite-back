import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { isValidObjectId, Model } from "mongoose";
import { handleException } from "src/exeptions/handleExetions.exception";
import { CreateGroupDto } from "./dto/create-group.dto";
import { UpdateGroupDto } from "./dto/update-group.dto";
import { Group } from "./entities/group.entity";
import { CreateCountryDto } from "../countries/dto/create-country.dto";

@Injectable()
export class GroupsService {
  constructor(
    @InjectModel(Group.name)
    private readonly groupModel: Model<Group>
  ) {}

  async create(createGroupDto: CreateGroupDto) {
    createGroupDto.groupName = createGroupDto.groupName.toUpperCase();
    try {
      const country = await this.groupModel.create(createGroupDto);
      return country;
    } catch (error) {
      handleException(error, "Group");
    }
  }
  async addGroup(term: string, createTeamDto: CreateCountryDto) {
    const group = await this.findOne(term);

    try {
      await group.updateOne();
      return group.teams;
    } catch (error) {
      handleException(error, "group");
    }
  }

  findAll() {
    return this.groupModel.find().exec();
  }

  async findOne(term: string) {
    let group: Group;

    // MongoID
    if (!group && isValidObjectId(term)) {
      group = await this.groupModel.findById(term);
    }
    //name
    if (!group) {
      group = await this.groupModel.findOne({
        groupName: term.toUpperCase().trim(),
      });
    }
    // no se encontro
    if (!group)
      throw new NotFoundException(
        `El país con el MongoId,nombre o noCountry"${term}" no encontrado `
      );
    return group;
  }

  async update(term: string, updateGroupDto: UpdateGroupDto) {
    const group = await this.findOne(term);
    if (updateGroupDto.groupName)
      updateGroupDto.groupName = updateGroupDto.groupName.toUpperCase();
    try {
      await group.updateOne(updateGroupDto);
      return { ...group.toJSON(), ...updateGroupDto };
    } catch (error) {
      handleException(error, "group");
    }
  }

  remove(id: number) {
    return `This action removes a #${id} group`;
  }
}
