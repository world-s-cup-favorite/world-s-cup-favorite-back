import { GroupsService } from './groups.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
export declare class GroupsController {
    private readonly groupsService;
    constructor(groupsService: GroupsService);
    create(createGroupDto: CreateGroupDto): Promise<import("./entities/group.entity").Group & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateGroupDto: UpdateGroupDto): string;
    remove(id: string): string;
}
