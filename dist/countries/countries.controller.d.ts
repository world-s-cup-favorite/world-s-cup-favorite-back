import { CountriesService } from "./countries.service";
import { CreateCountryDto } from "./dto/create-country.dto";
import { UpdateCountryDto } from "./dto/update-country.dto";
export declare class CountriesController {
    private readonly countriesService;
    constructor(countriesService: CountriesService);
    create(createCountryDto: CreateCountryDto): Promise<void>;
    findAll(): void;
    findOne(term: string): Promise<import("./entities/country.entity").NationalFootballTeam>;
    update(term: string, updateCountryDto: UpdateCountryDto): Promise<void>;
    remove(id: string): Promise<void>;
}
