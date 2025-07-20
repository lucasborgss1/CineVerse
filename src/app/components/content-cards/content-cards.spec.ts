import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCards } from './content-cards';

describe('ContentCards', () => {
  let component: ContentCards;
  let fixture: ComponentFixture<ContentCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
