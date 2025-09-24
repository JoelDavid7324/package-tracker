import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step1Svg } from './step1-svg';

describe('Step1Svg', () => {
  let component: Step1Svg;
  let fixture: ComponentFixture<Step1Svg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step1Svg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step1Svg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
