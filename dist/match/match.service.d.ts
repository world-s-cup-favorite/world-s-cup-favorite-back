import { Match } from "./entities/match.entity";
import { CreateMatchDto } from "./dto/create-match.dto";
import { UpdateMatchDto } from "./dto/update-match.dto";
import { Model } from "mongoose";
export declare class MatchService {
    private readonly matchModel;
    constructor(matchModel: Model<Match>);
    create(createMatchDto: CreateMatchDto): Promise<Match & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateMatchDto: UpdateMatchDto): string;
    remove(id: number): string;
}
