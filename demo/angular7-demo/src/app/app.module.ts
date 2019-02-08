import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component'; 
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { SizerComponent } from './sizer/sizer.component';
import { VoterComponent } from './voter/voter.component';
import { VotetakerComponent } from './votetaker/votetaker.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { CountdownParentComponent } from './countdown-parent/countdown-parent.component';
import { MissincontrolComponent } from './missincontrol/missincontrol.component';
import { AstronautComponent } from './astronaut/astronaut.component';
import { AdDirective } from './ads/ad.directive';
import { AdBannerComponent } from './ads/ad-banner/ad-banner.component';
import { HeroJobAdComponent } from './ads/hero-job-ad/hero-job-ad.component';
import { HeroProfileComponent } from './ads/hero-profile/hero-profile.component';
import { HighlightDirective } from './highlight.directive';
import { ExampleComponent } from './demo/example/example.component';
import { UnlessDirective } from './demo/unless.directive';
import { ExponentialStrengthPipe } from './demo/exponential-strength.pipe';
import { NameEditorComponent } from './demo/name-editor/name-editor.component';
import { ProfileEditorComponent } from './demo/profile-editor/profile-editor.component';
import { SuperHeroFormComponent } from './demo/super-hero-form/super-hero-form.component';
import { ForbiddenValidatorDirective } from './demo/forbidden-name-validator.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    SizerComponent,
    VoterComponent,
    VotetakerComponent,
    CountdownTimerComponent,
    CountdownParentComponent,
    MissincontrolComponent,
    AstronautComponent,
    AdDirective,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    HighlightDirective,
    ExampleComponent,
    UnlessDirective,
    ExponentialStrengthPipe,
    NameEditorComponent,
    ProfileEditorComponent,
    SuperHeroFormComponent,
    ForbiddenValidatorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ HeroJobAdComponent, HeroProfileComponent ],
})
export class AppModule { }
