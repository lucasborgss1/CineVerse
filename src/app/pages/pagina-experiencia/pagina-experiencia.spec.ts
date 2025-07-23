import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaExperiencia } from './pagina-experiencia';

describe('PaginaExperiencia', () => {
  let component: PaginaExperiencia;
  let fixture: ComponentFixture<PaginaExperiencia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaExperiencia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaExperiencia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
