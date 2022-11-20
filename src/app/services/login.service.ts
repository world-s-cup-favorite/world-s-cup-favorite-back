import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService implements OnInit {
  private readonly sesionStoregeKey = 'isAllowed';
  constructor(private readonly router: Router) {}
  ngOnInit(): void {}

  signIn() {
    //** se debe aceder al metodo setItem */
    sessionStorage.setItem(this.sesionStoregeKey, 'true');
    this.router.navigate(['home']);
  }

  logout() {
    sessionStorage.setItem(this.sesionStoregeKey, 'false');
    this.router.navigate(['']);
  }
}
