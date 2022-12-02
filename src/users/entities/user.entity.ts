import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  idUser;

  @Column("varchar", {
    unique: true,
  })
  name: string;

  @Column("varchar", {
    unique: true,
  })
  email: string;

  @Column("varchar")
  password: string;

  @Column("int")
  age: number;

  @Column("varchar")
  country: string;
}
