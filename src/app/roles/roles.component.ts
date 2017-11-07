import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { UserroleService } from '../services/userrole.service';
import { Role } from '../models/role';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  dataSource = new UserDataSource(this.role);
  displayedColumns = ['roleId', 'roleName', 'functionName'];
  constructor(private role: UserroleService) { }

  ngOnInit() {
  }

}
export class UserDataSource extends DataSource<any> {
constructor(private roleService: UserroleService) {
super();
}
connect(): Observable<Role[]> {
  return this.roleService.getAllrole();
}
disconnect() {}
}
