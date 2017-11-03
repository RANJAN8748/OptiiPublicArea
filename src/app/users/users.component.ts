import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Iuser } from '../user/iuser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {
 users: Iuser[];
  constructor(private user: UserService) { }
ngOnInit() {
  this.getUser();
 }
getUser() {
  this.user.getAllUsers().subscribe((data) => this.users = [{name : data[0].name, nativeName : data[0].nativeName}] );
}
}
