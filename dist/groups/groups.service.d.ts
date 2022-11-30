import { Model } from "mongoose";
import { CreateGroupDto } from "./dto/create-group.dto";
import { UpdateGroupDto } from "./dto/update-group.dto";
import { Group } from "./entities/group.entity";
import { CreateCountryDto } from "../countries/dto/create-country.dto";
export declare class GroupsService {
    private readonly groupModel;
    constructor(groupModel: Model<Group>);
    create(createGroupDto: CreateGroupDto): Promise<Group & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    addGroup(term: string, createTeamDto: CreateCountryDto): Promise<import("../countries/entities/country.entity").Country[]>;
    findAll(): Promise<(Group & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(term: string): Promise<Group>;
    update(term: string, updateGroupDto: UpdateGroupDto): Promise<{
        groupName?: string;
        teams?: import("../countries/entities/country.entity").Country[];
    }>;
    remove(id: number): string;
}
