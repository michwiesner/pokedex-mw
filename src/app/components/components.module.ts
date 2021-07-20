import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ResultsComponent } from './results/results.component';
import { PokeCardComponent } from './poke-card/poke-card.component';
import { PokeInformationComponent } from './poke-information/poke-information.component';
import { TypesComponent } from './types/types.component';
import { GenerationsComponent } from './generations/generations.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponentComponent } from './main-component/main-component.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NavbarComponent,
    ResultsComponent,
    PokeCardComponent,
    PokeInformationComponent,
    TypesComponent,
    GenerationsComponent,
    MainComponentComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgbModule
  ],
  exports: [
    NavbarComponent,
    ResultsComponent,
    TypesComponent,
    GenerationsComponent,
    SearchComponent
  ]
})
export class ComponentsModule { }
