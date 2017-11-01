import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() {
    this.isUserLogedIn = false;
  }
  private isUserLogedIn: boolean;
  private username: string;
    setUserLoggedIn() {
      this.isUserLogedIn = true;
    }
    getUserLoggedIn() {
      return this.isUserLogedIn;
    }
}
