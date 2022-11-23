import { Injectable } from "@nestjs/common";
import { USER_SEED } from "./data/users.seed";
import { UsersService } from "../users/users.service";
import { CountriesService } from "../countries/countries.service";
import { COUNTRY_SEED } from "./data/countries.seed";

@Injectable()
export class SeedService {
  constructor(
    private readonly usersService: UsersService,
    private readonly countriesService: CountriesService
  ) {}
  executeSeed() {
    this.usersService.fillCountriesSeedDate(USER_SEED);
    this.countriesService.fillCountriesSeedDate(COUNTRY_SEED);

    return "Seed executed!";
  }
}
