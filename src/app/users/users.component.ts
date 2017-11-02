import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {
 users: any;
  constructor(private user: UserService) { }
ngOnInit() {
  this.user.getAllUsers().map((response) => response.json()).subscribe((data) => this.users = data[1].name);
  console.log(this.users);
 }
// getUser() {
// this.user.getUsers().subscribe(res => this.users = res.json()[0]);
// }
}
