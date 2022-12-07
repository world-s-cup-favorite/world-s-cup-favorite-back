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
import { GroupsService } from "./groups.service";
import { CreateGroupDto } from "./dto/create-group.dto";
import { UpdateGroupDto } from "./dto/update-group.dto";
import { Groups } from "./entities/group.entity";

@Controller("groups")
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Post()
  create(@Body() createGroupDto: CreateGroupDto): Promise<Groups> {
    return this.groupsService.create(createGroupDto);
  }

  @Get()
  findAll(): Promise<Groups[]> {
    return this.groupsService.findAll();
  }

  @Get(":term")
  findOne(@Param("term") term: string): Promise<Groups> {
    return this.groupsService.findOne(term);
  }

  @Patch(":id")
  update(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() updateGroupDto: UpdateGroupDto
  ): Promise<Groups> {
    return this.groupsService.update(id, updateGroupDto);
  }

  @Delete(":id")
  remove(@Param("id", ParseUUIDPipe) id: string): Promise<Groups> {
    return this.groupsService.remove(id);
  }
}
