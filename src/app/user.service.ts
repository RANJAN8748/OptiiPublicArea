import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private http: Http) { }
// getAllUsers() {
//    const _url = 'https://restcountries.eu/rest/v2/name/india?fullText=true';
//   return this.http.get('https://restcountries.eu/rest/v2/name/india?fullText=true_url');

// }
getAllUsers() {
  const apiServerEndPoint = 'https://restcountries.eu/rest/v2/name/india?fullText=true';
  return this.http.get(apiServerEndPoint)
  .map(this.extractData)
  .catch(this.catchError);
}
private extractData(res: Response) {
  return res.json();
}
private catchError(error: Response | any) {
  return Observable.throw(error.json().error || 'Server Error');
}
}
