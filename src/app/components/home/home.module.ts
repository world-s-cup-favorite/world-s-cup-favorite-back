import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { AllCountriesComponent } from "./all-countries/all-countries.component";

@NgModule({
  declarations: [HomeComponent, AllCountriesComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
