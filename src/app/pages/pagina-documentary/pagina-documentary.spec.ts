import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaDocumentary } from './pagina-documentary';

describe('PaginaDocumentary', () => {
  let component: PaginaDocumentary;
  let fixture: ComponentFixture<PaginaDocumentary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaDocumentary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaDocumentary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
