import { Component, HostListener, OnInit } from '@angular/core';
import { PokemonService } from '../../shared/services/pokemon.service';
import { PokemonInit } from '../../shared/models/pokemon-detail';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss']
})
export class MainComponentComponent implements OnInit {
  results: PokemonInit[] = [];
  next = null;
  loadingMain = true;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const scroll = (document.documentElement.scrollTop || document.body.scrollTop);
    const documentHeight = (document.documentElement.clientHeight || document.body.clientHeight);
    const maxPosition = (document.documentElement.scrollHeight || document.body.scrollHeight);
    const positionInDocument = (documentHeight + scroll);


    if (positionInDocument === maxPosition) {
      if (this.pokeService.loadingScroll) { return; }
      this.getPokemons();
    }
  }

  constructor(public pokeService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.pokeService.getPokeNumber(this.next).subscribe((res) => {
      this.results.push(...res.pokemonList);
      this.next = res.next;
      this.loadingMain = false;
      this.pokeService.loadingScroll = false;
    });

  }

  checkModel(model) {
    this.pokeService.model = model;
  }

}
