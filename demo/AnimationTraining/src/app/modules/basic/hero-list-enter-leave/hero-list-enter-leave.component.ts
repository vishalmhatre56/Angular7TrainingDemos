import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-hero-list-enter-leave',
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      //':enter' = 'void => *'
      transition(':enter', [
        style({ transform: 'translateY(200%)' }),
        animate(200)
      ]),
      //':leave' = '* => void'
      transition(':leave', [
        animate(500, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ],
  templateUrl: './hero-list-enter-leave.component.html',
  styleUrls: ['./hero-list-enter-leave.component.scss']
})
export class HeroListEnterLeaveComponent implements OnInit {
  isShown: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  toggleShown(){
    this.isShown= !this.isShown;
  }
}
