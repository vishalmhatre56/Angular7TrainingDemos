import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './commonComponents/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'', redirectTo: '/basic',pathMatch:'full'
  },
  {
    path: 'basic',  
    loadChildren: './modules/basic/basic.module#BasicModule',
  },
  {
    path: 'advanced',  
    loadChildren: './modules/advanced/advanced.module#AdvancedModule',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
