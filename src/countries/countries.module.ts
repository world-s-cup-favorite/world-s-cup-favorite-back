import { Module } from "@nestjs/common";
import { CountriesService } from "./countries.service";
import { CountriesController } from "./countries.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Country, CountrySchema } from "./entities/country.entity";

@Module({
  controllers: [CountriesController],
  providers: [CountriesService],
  exports: [CountriesService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Country.name,
        schema: CountrySchema,
      },
    ]),
  ],
})
export class CountriesModule {}
