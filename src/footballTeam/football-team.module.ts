import { Module } from "@nestjs/common";
import { FootballTeamService } from "./football-team.service";
import { FootBallTeamController } from "./footballTeam.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FootBallTeam } from "./entities/footballTeam.entity";

@Module({
  controllers: [FootBallTeamController],
  providers: [FootballTeamService],
  exports: [FootballTeamService],
  imports: [TypeOrmModule.forFeature([FootBallTeam])],
})
export class FootballTeamModule {}
