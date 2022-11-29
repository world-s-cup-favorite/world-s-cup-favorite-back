"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchService = void 0;
const match_entity_1 = require("./entities/match.entity");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const handleExetions_exception_1 = require("../exeptions/handleExetions.exception");
let MatchService = class MatchService {
    constructor(matchModel) {
        this.matchModel = matchModel;
    }
    async create(createMatchDto) {
        try {
            const user = await this.matchModel.create(createMatchDto);
            return user;
        }
        catch (error) {
            (0, handleExetions_exception_1.handleException)(error, "Match");
        }
    }
    findAll() {
        return `This action returns all match`;
    }
    findOne(id) {
        return `This action returns a #${id} match`;
    }
    update(id, updateMatchDto) {
        return `This action updates a #${id} match`;
    }
    remove(id) {
        return `This action removes a #${id} match`;
    }
};
MatchService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(match_entity_1.Match.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], MatchService);
exports.MatchService = MatchService;
//# sourceMappingURL=match.service.js.map