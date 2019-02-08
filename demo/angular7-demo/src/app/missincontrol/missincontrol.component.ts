import { Component } from '@angular/core';
import { MissionService } from '../mission.service';
import { ViewContainerData } from '@angular/core/src/view';
import { AdItem } from '../ads/ad-item';
import { AdService } from '../ads/ad.service';
import { HeroProfileComponent } from '../ads/hero-profile/hero-profile.component';
import { HeroJobAdComponent } from '../ads/hero-job-ad/hero-job-ad.component';

@Component({
  selector: 'app-missincontrol',
  templateUrl: './missincontrol.component.html',
  styleUrls: ['./missincontrol.component.scss'],
  providers: [MissionService,AdService]
})
export class MissincontrolComponent{
  color:string;
  ads: AdItem[]=[
    new AdItem(HeroProfileComponent, {name: 'Bombasto', bio: 'Brave as they come'}),

    new AdItem(HeroProfileComponent, {name: 'Dr IQ', bio: 'Smart as they come'}),

    new AdItem(HeroJobAdComponent,   {headline: 'Hiring for several positions',
                                      body: 'Submit your resume today!'}),

    new AdItem(HeroJobAdComponent,   {headline: 'Openings in all departments',
                                      body: 'Apply today'}),
  ];;
  
  astronauts = ['vishal', 'swapnil', 'saurabh', 'kullu'];
  history: string[] = [];
  missions = ['fly to moon!',
    'fly to mars!',
    'fly to sun!',
    'fly to black hole!']
  nextMission = 0;

  constructor(private missionService: MissionService,private adService: AdService) {
    missionService.missionConfirmed$.subscribe(
      astronaut => {
        this.history.push(`${astronaut} confirmed the mission`);
      });
  }

  announce(): void {
    let mission = this.missions[this.nextMission++];
    this.missionService.announceMission(mission);
    this.history.push(`Mission "${mission}" announced`);
    if (this.nextMission >= this.missions.length)
      this.nextMission = 0;
  }

}
