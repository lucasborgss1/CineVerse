import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdCarouselPause } from './ngbd-carousel-pause';

describe('NgbdCarouselPause', () => {
  let component: NgbdCarouselPause;
  let fixture: ComponentFixture<NgbdCarouselPause>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgbdCarouselPause]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgbdCarouselPause);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
