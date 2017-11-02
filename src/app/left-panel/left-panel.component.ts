import { Component, OnInit } from '@angular/core';
import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';

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
  constructor() { }

  ngOnInit() {
  }
  menuExpander() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }
}
