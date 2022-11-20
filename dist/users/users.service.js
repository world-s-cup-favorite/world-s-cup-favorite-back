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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./entities/user.entity");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const handleExetions_exception_1 = require("../exeptions/handleExetions.exception");
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async create(createUserDto) {
        createUserDto.name = createUserDto.name.toUpperCase();
        try {
            const user = await this.userModel.create(createUserDto);
            return user;
        }
        catch (error) {
            (0, handleExetions_exception_1.handleException)(error, "usuario");
        }
    }
    findAll() {
        return this.userModel.find().exec();
    }
    async findOne(term) {
        let user;
        if ((0, mongoose_1.isValidObjectId)(term)) {
            user = await this.userModel.findById(term);
        }
        if (!user) {
            user = await this.userModel.findOne({ name: term });
        }
        if (!user)
            throw new common_1.NotFoundException(`El país con el usuario,nombre"${term}" no encontrado `);
        return user;
    }
    async update(term, updateUserDto) {
        const user = await this.findOne(term);
        if (updateUserDto.name)
            updateUserDto.name = updateUserDto.name.toUpperCase();
        try {
            await user.updateOne(updateUserDto);
            return Object.assign(Object.assign({}, user.toJSON()), updateUserDto);
        }
        catch (error) {
            (0, handleExetions_exception_1.handleException)(error, "usuario");
        }
    }
    async remove(id) {
        const user = await this.findOne(id);
        await user.deleteOne();
        return `el usuario con el mongoID ${user.id} y el nombre ${user.name} eliminado`;
    }
    fillCountriesSeedDate(users) { }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(user_entity_1.User.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map