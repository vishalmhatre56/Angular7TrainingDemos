import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, style, query, animateChild, group, animate, useAnimation } from '@angular/animations';
import { slideAnimation } from 'src/app/commonComponents/animations';

@Component({
  selector: 'app-advanced',
  animations: [
    trigger('routeAnimations', [
      transition('AboutComponent => OpenCloseReusableComponent', [
        useAnimation(slideAnimation, {
          params: {
            newPageStartPoint: '-100%',
            oldPageOutPoint: '100%'
          }
        })
      ]),
      transition('OpenCloseReusableComponent => AboutComponent', [
        useAnimation(slideAnimation, {
          params: {
            newPageStartPoint: '100%',
            oldPageOutPoint: '-100%'
          }
        })
      ])
    ])
  ],
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.scss']
})
export class AdvancedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
