import { Module } from "@nestjs/common";
import { FootballTeamService } from "./football-team.service";
import { FootBallTeamController } from "./footballTeam.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FootBallTeams } from "./entities/footballTeam.entity";
import { Groups } from "./entities/group.entity";

@Module({
  controllers: [FootBallTeamController],
  providers: [FootballTeamService],
  exports: [FootballTeamService],
  imports: [TypeOrmModule.forFeature([FootBallTeams, Groups])],
})
export class FootballTeamModule {}
