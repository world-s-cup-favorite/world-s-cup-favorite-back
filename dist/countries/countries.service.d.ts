import { Model } from "mongoose";
import { CreateCountryDto } from "./dto/create-country.dto";
import { UpdateCountryDto } from "./dto/update-country.dto";
import { Country } from "./entities/country.entity";
export declare class CountriesService {
    private readonly countryModel;
    constructor(countryModel: Model<Country>);
    create(createCountryDto: CreateCountryDto): Promise<Country & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): string;
    findOne(term: string): Promise<Country>;
    update(term: string, updateCountryDto: UpdateCountryDto): Promise<{
        name?: string;
        noCountry?: number;
        flag?: string;
        favoritePoint?: number;
    }>;
    remove(id: string): Promise<string>;
    fillCountriesSeedDate(countries: Country[]): void;
}
