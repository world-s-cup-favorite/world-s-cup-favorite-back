import { Module } from "@nestjs/common";
import { CountriesService } from "./countries.service";
import { CountriesController } from "./countries.controller";
import { TypeOrmModule } from "@nestjs/typeorm";

import { NationalFootballTeam } from "./entities/country.entity";

@Module({
  controllers: [CountriesController],
  providers: [CountriesService],
  exports: [CountriesService],
  imports: [TypeOrmModule.forFeature([NationalFootballTeam])],
})
export class CountriesModule {}
