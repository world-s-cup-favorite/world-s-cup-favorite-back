import { CreateCountryDto } from "./dto/create-country.dto";
import { UpdateCountryDto } from "./dto/update-country.dto";
import { NationalFootballTeam } from "./entities/country.entity";
export declare class CountriesService {
    constructor();
    create(createCountryDto: CreateCountryDto): Promise<void>;
    findAll(): void;
    findOne(term: string): Promise<NationalFootballTeam>;
    update(term: string, updateCountryDto: UpdateCountryDto): Promise<void>;
    remove(id: string): Promise<void>;
    fillCountriesSeedDate(countries: any): Promise<void>;
}
