import { FootBallTeam } from "src/footballTeam/entities/footballTeam.entity";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Group {
  @PrimaryGeneratedColumn("uuid")
  idGroup;

  @Column("varchar", {
    unique: true,
  })
  name: string;
  @Column("varchar", {
    array: true,
  })
  team: FootBallTeam[];
}
