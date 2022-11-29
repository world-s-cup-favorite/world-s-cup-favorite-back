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
exports.GroupsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const handleExetions_exception_1 = require("../exeptions/handleExetions.exception");
const group_entity_1 = require("./entities/group.entity");
let GroupsService = class GroupsService {
    constructor(countryModel) {
        this.countryModel = countryModel;
    }
    async create(createGroupDto) {
        createGroupDto.groupName = createGroupDto.groupName.toUpperCase();
        try {
            const country = await this.countryModel.create(createGroupDto);
            return country;
        }
        catch (error) {
            (0, handleExetions_exception_1.handleException)(error, "Country");
        }
    }
    findAll() {
        return `This action returns all groups`;
    }
    findOne(id) {
        return `This action returns a #${id} group`;
    }
    update(id, updateGroupDto) {
        return `This action updates a #${id} group`;
    }
    remove(id) {
        return `This action removes a #${id} group`;
    }
};
GroupsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(group_entity_1.Group.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], GroupsService);
exports.GroupsService = GroupsService;
//# sourceMappingURL=groups.service.js.map