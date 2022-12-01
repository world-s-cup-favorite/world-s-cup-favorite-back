import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { handleException } from "src/exeptions/handleExetions.exception";
import { CreateCountryDto } from "./dto/create-country.dto";
import { UpdateCountryDto } from "./dto/update-country.dto";
import { NationalFootballTeam } from "./entities/country.entity";

@Injectable()
export class CountriesService {
  constructor() {}

  async create(createCountryDto: CreateCountryDto) {
    createCountryDto.name = createCountryDto.name.toUpperCase();
    try {
    } catch (error) {
      handleException(error, "Country");
    }
  }

  findAll() {}

  async findOne(term: string) {
    let country: NationalFootballTeam;

    //number
    if (!isNaN(+term)) {
    }

    // MongoID
    if (country) {
    }
    //name
    if (!country) {
    }
    // no se encontro
    if (!country)
      throw new NotFoundException(
        `El país con el MongoId,nombre o noCountry"${term}" no encontrado `
      );
    return country;
  }

  async update(term: string, updateCountryDto: UpdateCountryDto) {
    const country = await this.findOne(term);
    if (updateCountryDto.name)
      updateCountryDto.name = updateCountryDto.name.toUpperCase();
    try {
    } catch (error) {
      handleException(error, "Country");
    }
  }

  async remove(id: string) {
    const deletedCount = null;

    if (deletedCount == 0)
      throw new BadRequestException(`el  país con el id "${id}" no encontrado`);
    return;
  }

  async fillCountriesSeedDate(countries) {}
}
