import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step2Svg } from './step2-svg';

describe('Step2Svg', () => {
  let component: Step2Svg;
  let fixture: ComponentFixture<Step2Svg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step2Svg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step2Svg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
