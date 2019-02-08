import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation, state, style } from '@angular/animations';
import { transAnimation } from 'src/app/commonComponents/animations';

@Component({
  selector: 'app-open-close-reusable',
  animations: [
    trigger('openClose', [
      state('open', style({
        height: 40,
        opacity: 1,
        backgroundColor: 'teal',
      })),
      state('closed', style({
        height: '20px',
        opacity: 0.6,
        backgroundColor: 'red',
      })),
      transition('open => closed', [
        useAnimation(transAnimation, {
          params: {
            height: '20px',
            opacity: 0.6,
            backgroundColor: 'red',
            time: '1s'
          }
        })
      ]),
      transition('closed => open', [
        useAnimation(transAnimation, {
          params: {
            height: '40px',
            opacity: 1,
            backgroundColor: 'teal',
            time: '1s'
          }
        })
      ])
    ])
  ],
  templateUrl: './open-close-reusable.component.html',
  styleUrls: ['./open-close-reusable.component.scss']
})
export class OpenCloseReusableComponent implements OnInit {
  isOpen: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
