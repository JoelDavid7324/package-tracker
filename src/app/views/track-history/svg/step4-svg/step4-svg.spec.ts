import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step4Svg } from './step4-svg';

describe('Step4Svg', () => {
  let component: Step4Svg;
  let fixture: ComponentFixture<Step4Svg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step4Svg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step4Svg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
