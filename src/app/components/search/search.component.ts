import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../shared/services/pokemon.service';
import { PokemonInit } from '../../shared/models/pokemon-detail';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  result: PokemonInit[] = [];
  term = '';
  noResult: boolean;

  constructor(private pokeService: PokemonService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.term = params.term;
      this.getPokemonBySearch(params.term);
    });
  }

  getPokemonBySearch(text: string) {
    this.result = [];
    this.pokeService.searchPokemon(text).subscribe( res => {
      this.result.push( res );
      this.noResult = false;
    }, error => {
      this.noResult = true;
    });

  }

}
