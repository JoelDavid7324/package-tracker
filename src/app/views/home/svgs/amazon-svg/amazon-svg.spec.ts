import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonSvg } from './amazon-svg';

describe('AmazonSvg', () => {
  let component: AmazonSvg;
  let fixture: ComponentFixture<AmazonSvg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmazonSvg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmazonSvg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
