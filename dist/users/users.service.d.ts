import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";
import { Model } from "mongoose";
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    create(createUserDto: CreateUserDto): Promise<User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): {};
    findOne(term: string): Promise<User>;
    update(term: string, updateUserDto: UpdateUserDto): Promise<{
        email?: string;
        name?: string;
        password?: string;
    }>;
    remove(id: string): Promise<string>;
    fillCountriesSeedDate(users: User[]): void;
}
