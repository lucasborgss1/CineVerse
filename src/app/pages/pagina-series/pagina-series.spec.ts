import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaSeries } from './pagina-series';

describe('PaginaSeries', () => {
  let component: PaginaSeries;
  let fixture: ComponentFixture<PaginaSeries>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaSeries]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaSeries);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
