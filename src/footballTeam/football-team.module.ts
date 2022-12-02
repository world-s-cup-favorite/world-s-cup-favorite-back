import { Module } from "@nestjs/common";
import { FootballTeamService } from "./football-team.service";
import { NationalFootballTeam } from "./footballTeam.controller";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  controllers: [NationalFootballTeam],
  providers: [FootballTeamService],
  exports: [FootballTeamService],
  imports: [TypeOrmModule.forFeature([NationalFootballTeam])],
})
export class FootballTeamModule {}
