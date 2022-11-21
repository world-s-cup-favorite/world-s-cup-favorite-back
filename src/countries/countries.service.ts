import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { isValidObjectId, Model } from "mongoose";
import { handleException } from "src/exeptions/handleExetions.exception";
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
      handleException(error, "Country");
    }
  }

  findAll() {
    return this.countryModel.find().exec();
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
        `El país con el MongoId,nombre o noCountry"${term}" no encontrado `
      );
    return country;
  }

  async update(term: string, updateCountryDto: UpdateCountryDto) {
    const country = await this.findOne(term);
    if (updateCountryDto.name)
      updateCountryDto.name = updateCountryDto.name.toUpperCase();
    try {
      await country.updateOne(updateCountryDto);
      return { ...country.toJSON(), ...updateCountryDto };
    } catch (error) {
      handleException(error, "Country");
    }
  }

  async remove(id: string) {
    const { deletedCount } = await this.countryModel.deleteOne({ _id: id });

    if (deletedCount == 0)
      throw new BadRequestException(`el  país con el id "${id}" no encontrado`);
    return;
  }

  fillCountriesSeedDate(countries: Country[]) {}
}
