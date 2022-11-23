import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<import("./entities/user.entity").User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<(import("./entities/user.entity").User & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(term: string): Promise<import("./entities/user.entity").User>;
    update(term: string, updateUserDto: UpdateUserDto): Promise<{
        email?: string;
        name?: string;
        password?: string;
    }>;
    remove(id: string): Promise<void>;
}
