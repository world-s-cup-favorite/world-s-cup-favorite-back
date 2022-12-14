import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Groups } from "./group.entity";

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
    nullable: false,
    onUpdate: "CASCADE",
  })
  @JoinColumn({
    name: "idGroup",
  })
  group: Groups;

  @Column("varchar", {
    unique: true,
  })
  flag: string;

  @Column("int", {
    default: 0,
  })
  favoritePoint: number;

  @Column("int", {
    default: 0,
  })
  gamesPlayed: number;

  @Column("int", {
    default: 0,
  })
  gamesWon: number;

  @Column("int", {
    default: 0,
  })
  lostMatches: number;

  @Column("int", {
    default: 0,
  })
  puntos: number;
}
