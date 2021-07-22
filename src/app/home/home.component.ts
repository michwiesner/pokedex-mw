import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchBox: FormGroup

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.searchBox = new FormGroup({
      search: new FormControl('', Validators.minLength(1))
    });
  }

  submit() {
    const value = this.searchBox.controls['search'].value;
    if ( value === '' ) { return }
    this.router.navigate(['/search', value.toLowerCase()]);
  }

}
