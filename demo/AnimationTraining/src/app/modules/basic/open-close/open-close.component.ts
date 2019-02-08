import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-open-close',
  animations: [
    trigger('openClose', [
      state('open', style(
        {
          height: '20rem',
          opacity: 1,
          backgroundColor: 'green'
        }
      )),
      state('closed', style(
        {
          height: '8rem',
          opacity: 0.4,
          backgroundColor: 'pink'
        }
      )),
      transition('open => closed', [
        animate('1s', keyframes([
          style({
            backgroundColor: 'green',
            height: '20rem',
            opacity: 1,
            offset: 0
          }),
          style({
            backgroundColor: 'red',
            height: '13rem',
            opacity: 0.7,
            offset: 0.8
          }),
          style({
            backgroundColor: 'pink',
            height: '8rem',
            opacity: 0.4,
            offset: 1.0
          })

          // style({
          //   backgroundColor: 'green',
          //   height: '20rem',
          //   opacity: 0.1,
          //   offset: 0.1
          // }),
          // style({
          //   backgroundColor: 'purple',
          //   height: '16rem',
          //   opacity: 0.6,
          //   offset: 0.2
          // }),
          // style({
          //   backgroundColor: 'red',
          //   height: '13rem',
          //   opacity: 1,
          //   offset: 0.5
          // }),
          // style({
          //   backgroundColor: 'pink',
          //   height: '8rem',
          //   opacity: 0.2,
          //   offset: 0.7
          // })

          // style({ opacity: 0.1, offset: 0.1 }),
          // style({ opacity: 0.6, offset: 0.2 }),
          // style({ opacity: 1,   offset: 0.5 }),
          // style({ opacity: 0.2, offset: 0.7 })
        ]))
      ]),
      transition('closed => open', [
        animate('1s', keyframes([
          style({
            backgroundColor: 'pink',
            height: '8rem',
            opacity: 0.4,
            offset: 0
          }),
          style({
            backgroundColor: 'teal',
            height: '*',
            opacity: 0.6,
            offset: 0.8
          }),
          style({
            backgroundColor: 'green',
            height: '20rem',
            opacity: 1,
            offset: 1.0
          })
        ]))
      ])
    ])
  ],
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.scss']
})
export class OpenCloseComponent implements OnInit {

  isOpen: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

}
