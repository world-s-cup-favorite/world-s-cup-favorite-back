import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  name: string;

  @Column("varchar", {
    unique: true,
  })
  email: string;

  @Column("varchar")
  password: string;
}
