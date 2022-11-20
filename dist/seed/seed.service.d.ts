import { UsersService } from "../users/users.service";
import { CountriesService } from "../countries/countries.service";
export declare class SeedService {
    private readonly usersService;
    private readonly countriesService;
    constructor(usersService: UsersService, countriesService: CountriesService);
    pupulateDB(): string;
}
