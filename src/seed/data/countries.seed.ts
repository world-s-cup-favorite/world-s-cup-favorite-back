import { v4 as uuid } from "uuid";
import { Country } from "../../countries/entities/country.entity";
export const COUNTRY_SEED = [
  {
    name: " Qatar",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Qatar.svg/800px-Flag_of_Qatar.svg.png",
    favoritePoint: 0,
    gamesPlayed: 0,

    gamesWon: 0,

    lostMatches: 0,
  },
  {
    name: "Alemania",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/640px-Flag_of_Germany.svg.png",
    favoritePoint: 0,
    gamesPlayed: 0,

    gamesWon: 0,

    lostMatches: 0,
  },
  {
    name: "Dinamarca",
    flag: " https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/1200px-Flag_of_Denmark.svg.png",
    favoritePoint: 0,
    gamesPlayed: 0,

    gamesWon: 0,

    lostMatches: 0,
  },
  {
    name: "Brasil",
    flag: " https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/300px-Flag_of_Brazil.svg.png",
    favoritePoint: 0,
    gamesPlayed: 0,

    gamesWon: 0,

    lostMatches: 0,
  },
  {
    name: "Australia",
    flag: " https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/1200px-Flag_of_Australia_%28converted%29.svg.png",
    favoritePoint: 0,
    gamesPlayed: 0,

    gamesWon: 0,

    lostMatches: 0,
  },
  {
    name: "Gales",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Flag_of_Wales.svg/200px-Flag_of_Wales.svg.png",
    favoritePoint: 0,
    gamesPlayed: 0,

    gamesWon: 0,

    lostMatches: 0,
  },
  {
    name: "Camerún",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flag_of_Cameroon.svg/1200px-Flag_of_Cameroon.svg.png",
    favoritePoint: 0,
    gamesPlayed: 0,

    gamesWon: 0,

    lostMatches: 0,
  },
  {
    name: "Marruecos",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/200px-Flag_of_Morocco.svg.png",
    favoritePoint: 0,
    gamesPlayed: 0,

    gamesWon: 0,

    lostMatches: 0,
  },
  {
    name: "Túnez",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Tunisia.svg",
    favoritePoint: 0,
    gamesPlayed: 0,

    gamesWon: 0,

    lostMatches: 0,
  },
  {
    name: "Portugal",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/1200px-Flag_of_Portugal.svg.png",
    favoritePoint: 0,
    gamesPlayed: 0,

    gamesWon: 0,

    lostMatches: 0,
  },
  {
    name: "Polonia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/200px-Flag_of_Poland.svg.png",
    favoritePoint: 0,
    gamesPlayed: 0,

    gamesWon: 0,

    lostMatches: 0,
  },
  {
    name: "Senegal",
    flag: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal.svg",
    favoritePoint: 0,
    gamesPlayed: 0,

    gamesWon: 0,

    lostMatches: 0,
  },
  {
    name: "Ghana",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Ghana.svg/1200px-Flag_of_Ghana.svg.png",
    favoritePoint: 0,
    gamesPlayed: 0,

    gamesWon: 0,

    lostMatches: 0,
  },
  {
    name: "México",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Bandera_de_M%C3%A9xico_%281916-1934%29.png/1200px-Bandera_de_M%C3%A9xico_%281916-1934%29.png",
    favoritePoint: 0,
    gamesPlayed: 0,

    gamesWon: 0,

    lostMatches: 0,
  },
  {
    name: "Estados Unidos",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png",
    favoritePoint: 0,
    gamesPlayed: 0,

    gamesWon: 0,

    lostMatches: 0,
  },
  {
    name: "Canadá",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/800px-Flag_of_Canada_%28Pantone%29.svg.png",
    favoritePoint: 0,
    gamesPlayed: 0,

    gamesWon: 0,

    lostMatches: 0,
  },
  {
    name: "Uruguay",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/945px-Flag_of_Uruguay.svg.png",
    favoritePoint: 0,
    gamesPlayed: 0,

    gamesWon: 0,

    lostMatches: 0,
  },
  {
    name: "Ecuador",
    flag: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Flag_of_Ecuador.svg",
    favoritePoint: 0,
    gamesPlayed: 0,

    gamesWon: 0,

    lostMatches: 0,
  },
  {
    name: "Arabia Saudí",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Saudi_Arabia_%28type_2%29.svg/800px-Flag_of_Saudi_Arabia_%28type_2%29.svg.png",
    favoritePoint: 0,
    gamesPlayed: 0,

    gamesWon: 0,

    lostMatches: 0,
  },
  {
    name: "Corea del Sur",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/200px-Flag_of_South_Korea.svg.png",
    favoritePoint: 0,
    gamesPlayed: 0,

    gamesWon: 0,

    lostMatches: 0,
  },
  {
    name: "Irán",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/630px-Flag_of_Iran.svg.png",
    favoritePoint: 0,
    gamesPlayed: 0,

    gamesWon: 0,

    lostMatches: 0,
  },
  {
    name: "Argentina",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1200px-Flag_of_Argentina.svg.png",
    favoritePoint: 0,
    gamesPlayed: 0,

    gamesWon: 0,

    lostMatches: 0,
  },
  {
    name: "Holanda",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1280px-Flag_of_the_Netherlands.svg.png",
    favoritePoint: 0,
    gamesPlayed: 0,

    gamesWon: 0,

    lostMatches: 0,
  },
  {
    name: "Suiza",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/512px-Flag_of_Switzerland.svg.png",
    favoritePoint: 0,
    gamesPlayed: 0,

    gamesWon: 0,

    lostMatches: 0,
  },
  {
    name: "Inglaterra",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/2560px-Flag_of_England.svg.png",
    favoritePoint: 0,
    gamesPlayed: 0,

    gamesWon: 0,

    lostMatches: 0,
  },
  {
    name: "Serbia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/2560px-Flag_of_Serbia.svg.png",
    favoritePoint: 0,
    gamesPlayed: 0,

    gamesWon: 0,

    lostMatches: 0,
  },
  {
    name: "España",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1200px-Bandera_de_Espa%C3%B1a.svg.png",
    favoritePoint: 0,
    gamesPlayed: 0,

    gamesWon: 0,

    lostMatches: 0,
  },
  {
    name: "Croacia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/1280px-Flag_of_Croatia.svg.png",
    favoritePoint: 0,
    gamesPlayed: 0,

    gamesWon: 0,

    lostMatches: 0,
  },
  {
    name: "Bélgica",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/1182px-Flag_of_Belgium.svg.png",
    favoritePoint: 0,
    gamesPlayed: 0,

    gamesWon: 0,

    lostMatches: 0,
  },
  {
    name: "Francia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Flag_of_France_%281790%E2%80%931794%29.svg/270px-Flag_of_France_%281790%E2%80%931794%29.svg.png",
    favoritePoint: 0,
    gamesPlayed: 0,

    gamesWon: 0,

    lostMatches: 0,
  },
];
