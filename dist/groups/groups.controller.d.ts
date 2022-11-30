import { GroupsService } from "./groups.service";
import { CreateGroupDto } from "./dto/create-group.dto";
import { CreateCountryDto } from "../countries/dto/create-country.dto";
import { UpdateGroupDto } from "./dto/update-group.dto";
export declare class GroupsController {
    private readonly groupsService;
    constructor(groupsService: GroupsService);
    create(createGroupDto: CreateGroupDto): Promise<import("./entities/group.entity").Group & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    addTeam(id: string, createTeamDto: CreateCountryDto): Promise<import("../countries/entities/country.entity").Country[]>;
    findAll(): Promise<(import("./entities/group.entity").Group & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: string): Promise<import("./entities/group.entity").Group>;
    update(id: string, updateGroupDto: UpdateGroupDto): Promise<{
        groupName?: string;
        teams?: import("../countries/entities/country.entity").Country[];
    }>;
    remove(id: string): string;
}
