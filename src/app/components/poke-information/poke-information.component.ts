import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../shared/services/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { pokemonShort } from 'src/app/shared/models/pokemon-detail';
import { PokemonInit } from '../../shared/models/pokemon-detail';

@Component({
  selector: 'app-poke-information',
  templateUrl: './poke-information.component.html',
  styleUrls: ['./poke-information.component.scss']
})
export class PokeInformationComponent implements OnInit {

  pokemon: pokemonShort = null;
  isCollapsed = true;
  evolutions: PokemonInit[] = [];

  constructor(private activatedRoute: ActivatedRoute , private pokeService: PokemonService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.getPokemon(params.id);
    });
  }


  getPokemon(id: string) {
    this.pokeService.getPokeDetails(id).subscribe( res => {
      this.pokemon = Object.assign( res[0], res[1]);
      // console.log(this.pokemon);
      this.getEvolutions(this.pokemon.evolution_chain.url);
    });

  }

  getEvolutions(url: string) {
    this.pokeService.getEvolutionChain(url).subscribe(res => {
      this.evolutions = res;
    })
  }

}
