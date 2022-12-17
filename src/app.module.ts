import { Module } from "@nestjs/common";
import { FootballTeamModule } from "./footballTeam/football-team.module";
import { SeedModule } from "./seed/seed.module";

import { CommonModule } from "./common/common.module";
import { ConfigModule } from "@nestjs/config";

import { TypeOrmConfigModule } from "./config/typeorm-config.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
    }),
    TypeOrmConfigModule,
    FootballTeamModule,
    SeedModule,
    CommonModule,
    AuthModule,
  ],
  providers: [],
})
export class AppModule {}
