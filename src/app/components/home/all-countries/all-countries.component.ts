import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Modelcountires } from 'src/app/models/countries.model';
import { CountriesServiceService } from 'src/app/services/countries-service.service';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.scss'],
})
export class AllCountriesComponent implements OnInit {
  public countries$: Observable<Modelcountires[]> | undefined;
  constructor(private readonly countriesService: CountriesServiceService) {}
  ngOnInit(): void {
    this.countries$ = this.countriesService.getCoutries();
    this.countriesService.getCoutries().subscribe(console.log);
  }
}
