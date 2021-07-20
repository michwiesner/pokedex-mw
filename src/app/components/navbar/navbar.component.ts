import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../../shared/services/pokemon.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isCollapsed = true;
  scrolled: boolean;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    let element = document.querySelector('.navbar');
    if (window.pageYOffset > element.clientHeight) {
      this.scrolled = true;
    } else {
      this.scrolled = false;
    }
  }

  constructor(private scroll: ViewportScroller, private pokeService: PokemonService, private router: Router) { }

  ngOnInit(): void {
  }

  goTo(model: string) {
    const activeRoute = this.router.url.split('/');

    if (activeRoute.length >= 3 ) {
      this.router.navigateByUrl('/');
    }

    this.pokeService.model = model;
    this.isCollapsed = true;
    this.scroll.scrollToPosition([0,0]);
    
  }

}
