import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvancedRoutingModule } from './advanced-routing.module';
import { AdvancedComponent } from './advanced/advanced.component';
import { HeroListPageComponent } from './hero-list-page/hero-list-page.component';
import { HeroListGroupComponent } from './hero-list-group/hero-list-group.component';
import { HeroListGroupPageComponent } from './hero-list-group-page/hero-list-group-page.component';
import { OpenCloseReusableComponent } from './open-close-reusable/open-close-reusable.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [AdvancedComponent, HeroListPageComponent, HeroListGroupComponent, HeroListGroupPageComponent, OpenCloseReusableComponent, AboutComponent],
  imports: [
    CommonModule,
    AdvancedRoutingModule
  ]
})
export class AdvancedModule { }
