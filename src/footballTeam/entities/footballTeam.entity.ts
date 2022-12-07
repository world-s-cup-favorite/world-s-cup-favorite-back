import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Groups } from "../../groups/entities/group.entity";

@Entity("football_team")
export class FootBallTeams {
  @PrimaryGeneratedColumn("uuid")
  idTeam: string;

  @Column("varchar", {
    unique: true,
  })
  name: string;

  @ManyToOne(() => Groups, (groups) => groups.teams, {
    cascade: true,
  })
  group: Groups;

  @Column("varchar", {
    unique: true,
  })
  flag: string;

  @Column("numeric", {
    default: 0,
  })
  favoritePoint: number;

  @Column("numeric", {
    default: 0,
  })
  gamesPlayed: number;

  @Column("numeric", {
    default: 0,
  })
  gamesWon: number;

  @Column("numeric", {
    default: 0,
  })
  lostMatches: number;
}
