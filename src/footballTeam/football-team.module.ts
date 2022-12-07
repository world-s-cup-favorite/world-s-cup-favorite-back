import { Module } from "@nestjs/common";
import { FootballTeamService } from "./football-team.service";
import { FootBallTeamController } from "./footballTeam.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FootBallTeams } from "./entities/footballTeam.entity";
import { FootballTeamDto } from "./dto/create-football-team.dto";
import { GroupsModule } from "../groups/groups.module";

@Module({
  controllers: [FootBallTeamController],
  providers: [FootballTeamService],
  exports: [FootballTeamService, TypeOrmModule.forFeature([FootBallTeams])],
  imports: [TypeOrmModule.forFeature([FootBallTeams]), GroupsModule],
})
export class FootballTeamModule {}
