import { Injectable } from '@angular/core';
 
import { Observable, of } from 'rxjs';
import { Hero } from '../domain/hero';
import { HEROES } from '../domain/mock-heroes';
import { map } from 'rxjs/operators';
 

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    return of(HEROES);
  }

  getHero(id: number | string) {
    return this.getHeroes().pipe(
      // (+) before `id` turns the string into a number
      map((heroes: Hero[]) => heroes.find(hero => hero.id === +id))
    );
  }
}