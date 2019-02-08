import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  fontSizePx : Number = 14;
  heroes: Hero[] = [];
  values = '';
  val = '';

  update(val: string) { this.val = val; }
  onKey(event: any): void { // without type info
    this.values += event.target.value + ' | ';
  }

  clearKeyValue(): void {
    this.values = "";
  }  
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}