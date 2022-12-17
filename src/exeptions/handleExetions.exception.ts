import {
  BadRequestException,
  InternalServerErrorException,
} from "@nestjs/common";

export function handleException(error: any, termToFind: string) {
  if (error.code === "23505") {
    console.log(error);
    throw new BadRequestException(
      `El ${termToFind} ya existe en la base de datos ${JSON.stringify(
        error.detail
      )}`
    );
  }
  console.log(error);
  throw new InternalServerErrorException("Please checj server log");
}
