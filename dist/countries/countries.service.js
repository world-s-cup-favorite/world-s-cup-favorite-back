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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountriesService = void 0;
const common_1 = require("@nestjs/common");
const handleExetions_exception_1 = require("../exeptions/handleExetions.exception");
let CountriesService = class CountriesService {
    constructor() { }
    async create(createCountryDto) {
        createCountryDto.name = createCountryDto.name.toUpperCase();
        try {
        }
        catch (error) {
            (0, handleExetions_exception_1.handleException)(error, "Country");
        }
    }
    findAll() { }
    async findOne(term) {
        let country;
        if (!isNaN(+term)) {
        }
        if (country) {
        }
        if (!country) {
        }
        if (!country)
            throw new common_1.NotFoundException(`El país con el MongoId,nombre o noCountry"${term}" no encontrado `);
        return country;
    }
    async update(term, updateCountryDto) {
        const country = await this.findOne(term);
        if (updateCountryDto.name)
            updateCountryDto.name = updateCountryDto.name.toUpperCase();
        try {
        }
        catch (error) {
            (0, handleExetions_exception_1.handleException)(error, "Country");
        }
    }
    async remove(id) {
        const deletedCount = null;
        if (deletedCount == 0)
            throw new common_1.BadRequestException(`el  país con el id "${id}" no encontrado`);
        return;
    }
    async fillCountriesSeedDate(countries) { }
};
CountriesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], CountriesService);
exports.CountriesService = CountriesService;
//# sourceMappingURL=countries.service.js.map