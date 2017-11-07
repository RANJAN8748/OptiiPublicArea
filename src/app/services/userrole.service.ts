import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserroleService {

  constructor(private http: Http) { }
 getAllrole() {
  const apiServerEndPoint = 'http://localhost:58466/api/role';
  return this.http.get(apiServerEndPoint)
  .map(this.extractData)
  .catch(this.catchError);
}
private extractData(res: Response) {
  // console.log(res.json());
  return res.json();
}
private catchError(error: Response | any) {
  return Observable.throw(error.json().error || 'Server Error');
}
}
