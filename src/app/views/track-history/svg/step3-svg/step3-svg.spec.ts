import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step3Svg } from './step3-svg';

describe('Step3Svg', () => {
  let component: Step3Svg;
  let fixture: ComponentFixture<Step3Svg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step3Svg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step3Svg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
