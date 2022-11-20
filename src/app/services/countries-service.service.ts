import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Modelcountires } from "../models/countries.model";
@Injectable({
  providedIn: "root",
})
export class CountriesServiceService implements OnInit {
  constructor(private readonly httpClient: HttpClient) {}
  public ENDPOINT =
    "https://world-s-cup-favorite-back-henna.vercel.app/api/v1/countries/";
  ngOnInit(): void {}

  // ngOnInit(): void {
  //   this.httpClient.get(this.countire$);
  // }

  getCoutries(): Observable<Modelcountires[]> {
    return this.httpClient.get<Modelcountires[]>(this.ENDPOINT);
  }
}
