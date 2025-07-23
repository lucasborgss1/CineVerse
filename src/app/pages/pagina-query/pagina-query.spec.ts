import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaQuery } from './pagina-query';

describe('PaginaQuery', () => {
  let component: PaginaQuery;
  let fixture: ComponentFixture<PaginaQuery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaQuery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaQuery);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
