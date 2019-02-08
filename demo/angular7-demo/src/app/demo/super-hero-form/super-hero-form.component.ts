import { Component, OnInit } from '@angular/core';
import { SuperHero } from 'src/app/superHero';
import { NG_VALIDATORS } from '@angular/forms';
import { forbiddenNameValidator } from '../forbidden-name-validator.directive';

@Component({
  selector: 'app-super-hero-form',
  templateUrl: './super-hero-form.component.html',
  styleUrls: ['./super-hero-form.component.scss'],
  providers: [{provide: NG_VALIDATORS, useExisting: forbiddenNameValidator, multi: true}]
})
export class SuperHeroFormComponent implements OnInit {
  powers = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];

  model = new SuperHero(18, '', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  constructor() { }
  
  ngOnInit() {
  }
  
  onSubmit() { this.submitted = true; }
  newHero() {
    this.model = new SuperHero(42, '', '');
  }
}
