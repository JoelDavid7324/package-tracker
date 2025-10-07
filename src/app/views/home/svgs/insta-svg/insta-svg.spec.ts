import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstaSvg } from './insta-svg';

describe('InstaSvg', () => {
  let component: InstaSvg;
  let fixture: ComponentFixture<InstaSvg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstaSvg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstaSvg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
