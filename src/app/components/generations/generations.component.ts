import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.scss']
})
export class GenerationsComponent implements OnInit {

  generations = [
    {
      num: '1',
      title: 'Generacion 1'
    },
    {
      num: '2',
      title: 'Generacion 2'
    },
    {
      num: '3',
      title: 'Generacion 3'
    },
    {
      num: '4',
      title: 'Generacion 4'
    },
    {
      num: '5',
      title: 'Generacion 5'
    },
    {
      num: '6',
      title: 'Generacion 6'
    },
    {
      num: '7',
      title: 'Generacion 7'
    },
    {
      num: '8',
      title: 'Generacion 8'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
