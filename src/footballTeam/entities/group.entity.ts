import { FootBallTeams } from "src/footballTeam/entities/footballTeam.entity";
import { group } from "console";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity("group")
export class Groups {
  @PrimaryGeneratedColumn("uuid")
  idGroup: string;

  @Column("varchar", {
    unique: true,
  })
  name: string;

  @OneToMany(() => FootBallTeams, (footBallTeam) => footBallTeam.group, {
    eager: true,
    onUpdate: "CASCADE",
  })
  teams: FootBallTeams[];
}
