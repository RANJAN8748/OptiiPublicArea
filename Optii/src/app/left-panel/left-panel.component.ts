import { Component, OnInit } from '@angular/core';
import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css'],
  animations: [
    trigger('increasewidth', [
      state('small', style({
        transform: 'scale(1)'
      })),
      state('large', style({
        left: '0px'})),
      transition('small <=> large', animate('300ms ease-in'))
    ]),
  ]
})
export class LeftPanelComponent implements OnInit {
state: String = 'small';
  constructor(private router: Router, private user: AuthService) { }

  ngOnInit() {
  }
  menuExpander() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }
  loginUser(e) {
    e.preventDefault();
  const username = e.target[0].value;
  const password = e.target[0].value;
  if (username === 'admin' && password === 'admin' ) {
    this.user.setUserLoggedIn();
    this.router.navigate(['dashboard']);
  }
  }
}
