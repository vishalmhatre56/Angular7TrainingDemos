import { animation, style, animate, query, animateChild, group } from '@angular/animations';

export const transAnimation = animation([
   
    animate('{{time}}', style({
        height: '{{ height }}',
        opacity: '{{ opacity }}',
        backgroundColor: '{{ backgroundColor }}'
    }),)
])

export const slideAnimation = animation([
style({
    position: 'relative'
  }),
  query(':enter, :leave',[
    style({
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%'
    })
  ]),
  query(':enter', [
    style({ left: '{{newPageStartPoint}}'})
  ]),
  query(':leave', animateChild()),
  group([
    query(':leave',[
      animate('300ms ease-out', style({
        left: '{{oldPageOutPoint}}'
      }))
    ]),
    query(':enter', [
      animate('300ms ease-out', style({ left: '0%'}))
    ])
  ]),
  query(':enter', animateChild())

])