import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService {

  constructor(private _http: Http) { }
getAllUsers() {
  // const _url = 'https://restcountries.eu/rest/v2/name/india?fullText=true';
  return this._http.get('https://restcountries.eu/rest/v2/name/india?fullText=true_url');
}
}
