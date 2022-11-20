import { CountriesService } from "./countries.service";
import { CreateCountryDto } from "./dto/create-country.dto";
import { UpdateCountryDto } from "./dto/update-country.dto";
export declare class CountriesController {
    private readonly countriesService;
    constructor(countriesService: CountriesService);
    create(createCountryDto: CreateCountryDto): Promise<import("./entities/country.entity").Country & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<(import("./entities/country.entity").Country & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(term: string): Promise<import("./entities/country.entity").Country>;
    update(term: string, updateCountryDto: UpdateCountryDto): Promise<{
        name?: string;
        noCountry?: number;
        flag?: string;
        favoritePoint?: number;
    }>;
    remove(id: string): Promise<string>;
}
