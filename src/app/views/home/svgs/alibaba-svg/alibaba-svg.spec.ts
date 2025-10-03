import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlibabaSvg } from './alibaba-svg';

describe('AlibabaSvg', () => {
  let component: AlibabaSvg;
  let fixture: ComponentFixture<AlibabaSvg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlibabaSvg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlibabaSvg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
