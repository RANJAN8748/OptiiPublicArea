import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Iuser } from '../user/iuser';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {
  dataSource = new UserDataSource(this.user);
  displayedColumns = ['lastName', 'firstName', 'userName', 'roleName', 'typerowActiveId'];
  constructor(private user: UserService) { }
ngOnInit() {
 }
 ranjan() {
   alert('ranjan');
 }
}
export class UserDataSource extends DataSource<any> {
constructor(private userService: UserService) {
super();
}
connect(): Observable<Iuser[]> {
  return this.userService.getAllUsers();
}
disconnect() {}

}
