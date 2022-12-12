import { Injectable } from "@nestjs/common";

import { FootballTeamService } from "../footballTeam/football-team.service";
import { COUNTRY_SEED } from "./data/countries.seed";

@Injectable()
export class SeedService {
  constructor(private readonly countriesService: FootballTeamService) {}
  executeSeed() {
    this.insertNewSeed();

    return "Seed executed!";
  }

  private async insertNewSeed() {
    await this.countriesService.deletAll();

    const insertPromises = [];

    COUNTRY_SEED.forEach((teams) => {
      insertPromises.push(this.countriesService.create(teams));
    });

    await Promise.all(insertPromises);
    return true;
  }
}
