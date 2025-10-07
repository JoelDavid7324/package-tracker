import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookSvg } from './facebook-svg';

describe('FacebookSvg', () => {
  let component: FacebookSvg;
  let fixture: ComponentFixture<FacebookSvg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacebookSvg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacebookSvg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
