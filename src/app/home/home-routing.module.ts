import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { MainComponentComponent } from '../components/main-component/main-component.component';
import { ResultsComponent } from '../components/results/results.component';
import { SearchComponent } from '../components/search/search.component';
import { PokeInformationComponent } from '../components/poke-information/poke-information.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      {
        path: 'search/:term', component: SearchComponent
      },
      {
        path: 'type/:id', component: ResultsComponent
      },
      {
        path: 'generation/:id', component: ResultsComponent
      },
      {
        path: 'pokemon/:id', component: PokeInformationComponent
      },
      {
        path: '', component: MainComponentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
