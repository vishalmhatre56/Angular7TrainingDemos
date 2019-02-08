import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { BasicHomeComponent } from './basic-home/basic-home.component';
import { HeroListEnterLeaveComponent } from './hero-list-enter-leave/hero-list-enter-leave.component';
import { HeroListAutoComponent } from './hero-list-auto/hero-list-auto.component';

const routes: Routes = [
  {
    path: '',
    component: BasicComponent,
    children:[
      {
        path: '',
        component: BasicHomeComponent,
      },
      {
        path: 'open-close',
        component: OpenCloseComponent,
      },
      {
        path: 'hero-enter-leave',
        component: HeroListEnterLeaveComponent,
      },
      {
        path: 'hero-auto',
        component: HeroListAutoComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicRoutingModule { }
