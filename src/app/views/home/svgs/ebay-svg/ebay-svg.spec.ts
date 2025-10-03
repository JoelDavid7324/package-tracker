import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EbaySvg } from './ebay-svg';

describe('EbaySvg', () => {
  let component: EbaySvg;
  let fixture: ComponentFixture<EbaySvg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EbaySvg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EbaySvg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
