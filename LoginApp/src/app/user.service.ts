import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
private isUserLogedIn: boolean;
private username: string;
  constructor() {
    this.isUserLogedIn = false;
  }
  setUserLoggedIn() {
    this.isUserLogedIn = true;
  }
  getUserLoggedIn() {
    return this.isUserLogedIn;
  }

}
