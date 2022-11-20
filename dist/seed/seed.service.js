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
exports.SeedService = void 0;
const common_1 = require("@nestjs/common");
const users_seed_1 = require("./data/users.seed");
const users_service_1 = require("../users/users.service");
const countries_service_1 = require("../countries/countries.service");
const countries_seed_1 = require("./data/countries.seed");
let SeedService = class SeedService {
    constructor(usersService, countriesService) {
        this.usersService = usersService;
        this.countriesService = countriesService;
    }
    pupulateDB() {
        this.usersService.fillCountriesSeedDate(users_seed_1.USER_SEED);
        this.countriesService.fillCountriesSeedDate(countries_seed_1.COUNTRY_SEED);
        return "Seed executed!";
    }
};
SeedService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        countries_service_1.CountriesService])
], SeedService);
exports.SeedService = SeedService;
//# sourceMappingURL=seed.service.js.map