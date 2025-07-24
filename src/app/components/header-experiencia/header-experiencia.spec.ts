import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderExperiencia } from './header-experiencia';

describe('HeaderExperiencia', () => {
  let component: HeaderExperiencia;
  let fixture: ComponentFixture<HeaderExperiencia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderExperiencia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderExperiencia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
