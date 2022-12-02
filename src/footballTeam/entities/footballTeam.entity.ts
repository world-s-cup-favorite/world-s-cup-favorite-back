import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class FootballTeam {
  @PrimaryGeneratedColumn("uuid")
  idTeam: string;

  @Column("varchar", {
    unique: true,
  })
  name: string;

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
