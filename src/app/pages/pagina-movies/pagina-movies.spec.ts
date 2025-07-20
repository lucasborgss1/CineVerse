import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaMovies } from './pagina-movies';

describe('PaginaMovies', () => {
  let component: PaginaMovies;
  let fixture: ComponentFixture<PaginaMovies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaMovies]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaMovies);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
