import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { timeout } from 'q';

@Component({
  selector: 'app-hero-list-auto',
  animations: [
    trigger('shrinkOut', [
      state('in', style({ height: '*' })),
      transition(':leave', [
        style({ height: '*' }),
        animate(1000, style({ fontSize:18, height: 0 }))
      ]),
      state('in', style({ height: 12 })),
      //':enter' = 'void => *'
      transition(':enter', [
        style({ fontSize:0, height: 0 }),
        animate('1s', keyframes([
          style({fontSize: "2rem", height: "*" })
        ]
        ))
      ])
    ]),
  ],
  templateUrl: './hero-list-auto.component.html',
  styleUrls: ['./hero-list-auto.component.scss']
})
export class HeroListAutoComponent implements OnInit {
  isVisible = true;
  message= "Please Approve my leave..";
  constructor() { }

  ngOnInit() {
  }
  
  hide(){
    this.message='Bye Bye!!!';
    setTimeout(()=> {
      this.isVisible=false;
    }, 1);
    
  }
}
