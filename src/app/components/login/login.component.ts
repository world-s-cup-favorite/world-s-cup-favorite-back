import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { LoginService } from "src/app/services/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  title = "world cup champions";

  loginForm!: FormGroup | undefined;
  constructor(
    private formBuilder: FormBuilder,
    public readonly loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      countryName: new FormControl(""),
      countryCapital: new FormControl(""),
    });
    this.loginForm.valueChanges.subscribe((form) => {
      console.log(form);
    });
  }
  public countries: string[] = ["colombia", "perú", "chile"];

  public sendForm(): void {
    console.log(this.loginForm);
    const { countryName } = this.loginForm?.value;
    this.countries.push(countryName);
  }
}
