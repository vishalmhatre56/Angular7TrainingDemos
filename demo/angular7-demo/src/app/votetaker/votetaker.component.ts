import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votetaker',
  templateUrl: './votetaker.component.html',
  styleUrls: ['./votetaker.component.scss']
})
export class VotetakerComponent implements OnInit {
  agreed = 0;
  disagreed = 0;
  voters = ['Mr. IQ', 'Ms. Universe', '   ','Bombasto',null];

  constructor() { }

  ngOnInit() {
  }
  onVoted(agreed : any):void{
    agreed? this.agreed++ : this.disagreed++;
  }
}
