import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownBasic } from './dropdown-basic';

describe('DropdownBasic', () => {
  let component: DropdownBasic;
  let fixture: ComponentFixture<DropdownBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
