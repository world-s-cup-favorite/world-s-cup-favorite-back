import { FootBallTeams } from "src/footballTeam/entities/footballTeam.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
  JoinTable,
} from "typeorm";

@Entity("group")
export class Groups {
  @PrimaryGeneratedColumn("uuid")
  idGroup;

  @Column("varchar", {
    unique: true,
  })
  name: string;

  @OneToMany(() => FootBallTeams, (footBallTeam) => footBallTeam.group)
 
  teams: FootBallTeams[];
}
