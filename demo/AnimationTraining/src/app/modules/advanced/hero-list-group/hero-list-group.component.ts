import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';
import { trigger, state, style, transition, group, animate } from '@angular/animations';

@Component({
  selector: 'app-hero-list-group',
  animations: [
    trigger('flyInOut', [
      state('in', style({
        width: 220,
        transform: 'translateX(0)',opacity: 1
      })),
      transition(':enter',[
        style({ width: 10, transform: 'translateX(50px)', opacity: 0 }),
        group([
          animate('0.4s 0.1s ease',style({
            transform: 'translateX(0)',
            width:235
          })),
          animate('0.4s ease',style({
            opacity:1
          }))
        ])
      ]),
      transition(':leave',[
        group([
          animate('0.3s ease',style({
            transform: 'translateX(55px)',
            width:10
          })),
          animate('0.3s 0.2s ease',style({
            opacity:0
          }))
        ])
      ])
    ])
  ],
  templateUrl: './hero-list-group.component.html',
  styleUrls: ['./hero-list-group.component.scss']
})
export class HeroListGroupComponent {
  @Input() heroes: Hero[];

  @Output() remove = new EventEmitter<number>();

  removeHero(id: number) {
    this.remove.emit(id);
  }
}

