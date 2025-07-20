import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaAnimated } from './pagina-animated';

describe('PaginaAnimated', () => {
  let component: PaginaAnimated;
  let fixture: ComponentFixture<PaginaAnimated>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaAnimated]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaAnimated);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
