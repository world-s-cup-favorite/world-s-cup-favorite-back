import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { handleException } from "src/exeptions/handleExetions.exception";
import { CreateGroupDto } from "./dto/create-group.dto";
import { UpdateGroupDto } from "./dto/update-group.dto";
import { Group } from "./entities/group.entity";

@Injectable()
export class GroupsService {
  constructor(
    @InjectModel(Group.name)
    private readonly countryModel: Model<Group>
  ) {}
  async create(createGroupDto: CreateGroupDto) {
    createGroupDto.groupName = createGroupDto.groupName.toUpperCase();
    try {
      const country = await this.countryModel.create(createGroupDto);
      return country;
    } catch (error) {
      handleException(error, "Country");
    }
  }

  findAll() {
    return `This action returns all groups`;
  }

  findOne(id: number) {
    return `This action returns a #${id} group`;
  }

  update(id: number, updateGroupDto: UpdateGroupDto) {
    return `This action updates a #${id} group`;
  }

  remove(id: number) {
    return `This action removes a #${id} group`;
  }
}
