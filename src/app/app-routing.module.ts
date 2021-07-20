import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide:APP_BASE_HREF,useValue:'/'}]
})
export class AppRoutingModule { }
