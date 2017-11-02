import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private user: AuthService) { }

  ngOnInit() {
  }
  loginUser(e) {
    console.log(e);
  const username = e.target[0].value;
  const password = e.target[0].value;
  if (username === 'admin' && password === 'admin' ) {
    this.user.setUserLoggedIn();
    this.router.navigate(['tasklist']);
  }
   }
}
