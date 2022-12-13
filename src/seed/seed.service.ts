import { Injectable } from "@nestjs/common";

import { FootballTeamService } from "../footballTeam/football-team.service";
import { COUNTRY_SEED } from "./data/countries.seed";

@Injectable()
export class SeedService {
  constructor(private readonly countriesService: FootballTeamService) {}
  executeSeed() {
    this.countriesService.deletAll();
    this.insertNewSeed();

    return "Seed executed!";
  }

  private async insertNewSeed() {
    for (const teams of COUNTRY_SEED) {
      await this.countriesService.create(teams);
    }
    return true;
  }
}
