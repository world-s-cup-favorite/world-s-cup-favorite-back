import { Module } from "@nestjs/common";
import { GroupsService } from "./groups.service";
import { GroupsController } from "./groups.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Groups } from "./entities/group.entity";

@Module({
  controllers: [GroupsController],
  providers: [GroupsService],
  imports: [TypeOrmModule.forFeature([Groups])],
  exports: [TypeOrmModule.forFeature([Groups])],
})
export class GroupsModule {}
