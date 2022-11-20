import { Module } from "@nestjs/common";
import { SeedService } from "./seed.service";
import { SeedController } from "./seed.controller";
import { CountriesModule } from "../countries/countries.module";
import { UsersModule } from "src/users/users.module";

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [CountriesModule, UsersModule],
})
export class SeedModule {}
