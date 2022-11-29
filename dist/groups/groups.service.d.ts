import { Model } from "mongoose";
import { CreateGroupDto } from "./dto/create-group.dto";
import { UpdateGroupDto } from "./dto/update-group.dto";
import { Group } from "./entities/group.entity";
export declare class GroupsService {
    private readonly countryModel;
    constructor(countryModel: Model<Group>);
    create(createGroupDto: CreateGroupDto): Promise<Group & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateGroupDto: UpdateGroupDto): string;
    remove(id: number): string;
}
