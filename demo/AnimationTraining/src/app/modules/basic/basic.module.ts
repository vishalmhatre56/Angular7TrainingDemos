import { NgModule } from '@angular/core';
import { BasicRoutingModule } from './basic-routing.module';
import { BasicComponent } from './basic/basic.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { BasicHomeComponent } from './basic-home/basic-home.component';
import { HeroListEnterLeaveComponent } from './hero-list-enter-leave/hero-list-enter-leave.component';
import { CommonModule } from '@angular/common';
import { HeroListAutoComponent } from './hero-list-auto/hero-list-auto.component';

@NgModule({
  declarations: [
    BasicComponent,
    OpenCloseComponent,
    BasicHomeComponent,
    HeroListEnterLeaveComponent,
    HeroListAutoComponent,
  ],
  imports: [
    CommonModule,
    BasicRoutingModule,
  ]
})
export class BasicModule { }
