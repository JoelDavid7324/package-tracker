import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalmartSvg } from './walmart-svg';

describe('WalmartSvg', () => {
  let component: WalmartSvg;
  let fixture: ComponentFixture<WalmartSvg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WalmartSvg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WalmartSvg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
