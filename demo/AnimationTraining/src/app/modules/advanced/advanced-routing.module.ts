import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvancedComponent } from './advanced/advanced.component';
import { HeroListPageComponent } from './hero-list-page/hero-list-page.component';
import { HeroListGroupPageComponent } from './hero-list-group-page/hero-list-group-page.component';
import { OpenCloseReusableComponent } from './open-close-reusable/open-close-reusable.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path:'',
    component: AdvancedComponent,
    children:[
      { 
        path: '',
        redirectTo: '/advanced/heroes',
        pathMatch: 'full'
      },
      {
        path: 'heroes',
        component: HeroListPageComponent
      },
      {
        path: 'hero-group',
        component: HeroListGroupPageComponent
      },
      {
        path: 'reuse-animation',
        component: OpenCloseReusableComponent , data: {animation: 'OpenCloseReusableComponent'}
      },
      {
        path: 'about',
        component: AboutComponent, data: {animation: 'AboutComponent'}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvancedRoutingModule { }
