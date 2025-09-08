import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackHistory } from './track-history';

describe('TrackHistory', () => {
  let component: TrackHistory;
  let fixture: ComponentFixture<TrackHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackHistory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackHistory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
