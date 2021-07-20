import { Component, HostListener, Input, OnInit } from '@angular/core';
import { PokemonInit } from '../../shared/models/pokemon-detail';
import { PokemonService } from '../../shared/services/pokemon.service';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.scss']
})
export class PokeCardComponent implements OnInit {

  @Input() results: PokemonInit[] = [];

  constructor(public pokeService: PokemonService) {}

  ngOnInit() {

  }
}
