import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeInformationComponent } from './poke-information.component';

describe('PokeInformationComponent', () => {
  let component: PokeInformationComponent;
  let fixture: ComponentFixture<PokeInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
