import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { isValidObjectId, Model } from "mongoose";
import { isPlusToken } from "typescript";
import { CreateCountryDto } from "./dto/create-country.dto";
import { UpdateCountryDto } from "./dto/update-country.dto";
import { Country } from "./entities/country.entity";

@Injectable()
export class CountriesService {
  constructor(
    @InjectModel(Country.name)
    private readonly countryModel: Model<Country>
  ) {}

  async create(createCountryDto: CreateCountryDto) {
    createCountryDto.name = createCountryDto.name.toUpperCase();
    try {
      const country = await this.countryModel.create(createCountryDto);
      return country;
    } catch (error) {
      if (error.code === 11000) {
        throw new BadRequestException(
          `El usuario existe en la base de datos ${JSON.stringify(
            error.keyvalue
          )}`
        );
      }
      console.log(error);
      throw new InternalServerErrorException();
    }
  }

  findAll() {
    return `This action returns all countries`;
  }

  async findOne(term: string) {
    let country: Country;

    //number
    if (!isNaN(+term)) {
      country = await this.countryModel.findOne({ noCountry: term });
    }

    // MongoID
    if (!country && isValidObjectId(term)) {
      country = await this.countryModel.findById(term);
    }
    //name
    if (!country) {
      country = await this.countryModel.findOne({
        name: term.toUpperCase().trim(),
      });
    }
    // no se encontro
    if (!country)
      throw new NotFoundException(
        `El país con el usuario,nombre o noCountry"${term}" no encontrado `
      );
    return country;
  }

  async update(term: string, updateCountryDto: UpdateCountryDto) {
    const country = await this.findOne(term);
    if (updateCountryDto.name)
      updateCountryDto.name = updateCountryDto.name.toUpperCase();
    await country.updateOne(updateCountryDto);

    return { ...country.toJSON(), ...updateCountryDto };
  }

  remove(id: number) {
    return `This action removes a #${id} country`;
  }

  fillCountriesSeedDate(countries: Country[]) {}
}
