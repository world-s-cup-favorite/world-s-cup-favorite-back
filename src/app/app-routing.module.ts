import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./components/login/login.component";

import { LoginGuard } from "./guards/login.guard";
import { ComponentsModule } from "./components/components.module";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
  },
  {
    path: "home",
    loadChildren: () =>
      import("./components/home/home.module").then((m) => m.HomeModule),
    canActivate: [LoginGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ComponentsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
