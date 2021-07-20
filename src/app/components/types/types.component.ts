import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss']
})
export class TypesComponent implements OnInit {

  types = [
    {
      name: 'bug',
      src: 'assets/images/types/bug.svg'
    },
    {
      name: 'dark',
      src: 'assets/images/types/dark.svg'
    },
    {
      name: 'dragon',
      src: 'assets/images/types/dragon.svg'
    },
    {
      name: 'electric',
      src: 'assets/images/types/electric.svg'
    },
    {
      name: 'fairy',
      src: 'assets/images/types/fairy.svg'
    },
    {
      name: 'fighting',
      src: 'assets/images/types/fighting.svg'
    },
    {
      name: 'fire',
      src: 'assets/images/types/fire.svg'
    },
    {
      name: 'flying',
      src: 'assets/images/types/flying.svg'
    },
    {
      name: 'ghost',
      src: 'assets/images/types/ghost.svg'
    },
    {
      name: 'grass',
      src: 'assets/images/types/grass.svg'
    },
    {
      name: 'ground',
      src: 'assets/images/types/ground.svg'
    },
    {
      name: 'ice',
      src: 'assets/images/types/ice.svg'
    },
    {
      name: 'normal',
      src: 'assets/images/types/normal.svg'
    },
    {
      name: 'poison',
      src: 'assets/images/types/poison.svg'
    },
    {
      name: 'psychic',
      src: 'assets/images/types/psychic.svg'
    },
    {
      name: 'rock',
      src: 'assets/images/types/rock.svg'
    },
    {
      name: 'steel',
      src: 'assets/images/types/steel.svg'
    },
    {
      name: 'water',
      src: 'assets/images/types/water.svg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem('model', '2');
  }

}
