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
exports.CountriesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const handleExetions_exception_1 = require("../exeptions/handleExetions.exception");
const country_entity_1 = require("./entities/country.entity");
let CountriesService = class CountriesService {
    constructor(countryModel) {
        this.countryModel = countryModel;
    }
    async create(createCountryDto) {
        createCountryDto.name = createCountryDto.name.toUpperCase();
        try {
            const country = await this.countryModel.create(createCountryDto);
            return country;
        }
        catch (error) {
            (0, handleExetions_exception_1.handleException)(error, "Country");
        }
    }
    findAll() {
        return `This action returns all countries`;
    }
    async findOne(term) {
        let country;
        if (!isNaN(+term)) {
            country = await this.countryModel.findOne({ noCountry: term });
        }
        if (!country && (0, mongoose_2.isValidObjectId)(term)) {
            country = await this.countryModel.findById(term);
        }
        if (!country) {
            country = await this.countryModel.findOne({
                name: term.toUpperCase().trim(),
            });
        }
        if (!country)
            throw new common_1.NotFoundException(`El país con el usuario,nombre o noCountry"${term}" no encontrado `);
        return country;
    }
    async update(term, updateCountryDto) {
        const country = await this.findOne(term);
        if (updateCountryDto.name)
            updateCountryDto.name = updateCountryDto.name.toUpperCase();
        try {
            await country.updateOne(updateCountryDto);
            return Object.assign(Object.assign({}, country.toJSON()), updateCountryDto);
        }
        catch (error) {
            (0, handleExetions_exception_1.handleException)(error, "Country");
        }
    }
    remove(id) {
        return `This action removes a #${id} country`;
    }
    fillCountriesSeedDate(countries) { }
};
CountriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(country_entity_1.Country.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CountriesService);
exports.CountriesService = CountriesService;
//# sourceMappingURL=countries.service.js.map