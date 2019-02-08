import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {
  condition: boolean=false;
  birthday = new Date(1988, 3, 15); // April 15, 1988
  toggle = false; // start with true == fullDate
  power = 5;
  factor =2;

  constructor() { }

  ngOnInit() {
  }

  get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle; }
}
