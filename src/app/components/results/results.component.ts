import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../shared/services/pokemon.service';
import { DamageRelations } from '../../shared/models/type-details';
import { PokemonInit } from 'src/app/shared/models/pokemon-detail';
import { MainRegion } from '../../shared/models/generation-details';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  path = '';
  param = '';
  total = 0;
  results: PokemonInit[] = [];
  damage: DamageRelations = null;
  main_region: MainRegion = null;

  constructor(private activatedRoute: ActivatedRoute, private pokeService: PokemonService) { }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe(params => {
      this.path = params[0].path;
      this.param = params[1].path;
      this.damage = null;
      this.main_region = null;
      switch (params[0].path) {
        case 'type':
          this.getPokemonByType(params[1].path);
          break;
        case 'generation':
          this.getPokemonByGeneration(params[1].path);
          break;
        default:
          break;
      }
    });
  }


  getPokemonByType(type: string) {
    this.results = [];
    this.pokeService.getPokeType(type).subscribe((res) => {
      this.results.push(...res.pokemonList);
      this.total = res.total;
      this.damage = res.damage;
    });

  }

  getPokemonByGeneration(genNum: string) {
    this.results = [];
    this.pokeService.getPokeGeneration(genNum).subscribe(res => {
      this.results.push(...res.pokemonList);
      this.total = res.total;
      this.main_region = res.main_region;
    })

  }

}
