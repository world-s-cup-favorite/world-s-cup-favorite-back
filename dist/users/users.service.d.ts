import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";
export declare class UsersService {
    constructor();
    create(createUserDto: CreateUserDto): Promise<void>;
    findAll(): void;
    findOne(term: string): Promise<User>;
    update(term: string, updateUserDto: UpdateUserDto): Promise<void>;
    remove(id: string): Promise<void>;
    fillCountriesSeedDate(users: any): Promise<number>;
}
