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
    findAll(): Promise<(Country & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(term: string): Promise<Country>;
    update(term: string, updateCountryDto: UpdateCountryDto): Promise<{
        name?: string;
        flag?: string;
        favoritePoint?: number;
    }>;
    remove(id: string): Promise<void>;
    fillCountriesSeedDate(countries: Country[]): void;
}
