import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<void>;
    findAll(): void;
    findOne(term: string): Promise<import("./entities/user.entity").User>;
    update(term: string, updateUserDto: UpdateUserDto): Promise<void>;
    remove(id: string): Promise<void>;
}
