import {
  BadRequestException,
  InternalServerErrorException,
} from "@nestjs/common";

export function handleException(error: any, termToFind: string) {
  if (error.code === "23505") {
    throw new BadRequestException(
      `El ${termToFind} ya existe en la base de datos ${JSON.stringify(
        error.keyValue
      )}`
    );
  }
  console.log(error);
  throw new InternalServerErrorException();
}
