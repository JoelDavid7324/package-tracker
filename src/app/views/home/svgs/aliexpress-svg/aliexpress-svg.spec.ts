import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AliexpressSvg } from './aliexpress-svg';

describe('AliexpressSvg', () => {
  let component: AliexpressSvg;
  let fixture: ComponentFixture<AliexpressSvg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AliexpressSvg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AliexpressSvg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
