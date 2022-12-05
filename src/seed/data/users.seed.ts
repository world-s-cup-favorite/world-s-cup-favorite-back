import { v4 as uuid } from "uuid";
import { User } from "../../users/entities/user.entity";
export const USER_SEED: User[] = [
  {
    idUser: uuid(),
    name: "Kravmaga",
    email: "edwardsalex8034@gmail.com",
    password: "Kravmaga",
    age: 27,
    country: "colombia",
  },
];
