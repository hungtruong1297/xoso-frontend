import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  static isLoggedIn: boolean = false;

  constructor() { }

  IsLoggedIn() {
    if (!!localStorage.getItem('id_token')) {
      AuthService.isLoggedIn = true;
      return true;
    }
    return false;
  }
}
