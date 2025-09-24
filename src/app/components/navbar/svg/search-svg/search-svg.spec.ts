import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSvg } from './search-svg';

describe('SearchSvg', () => {
  let component: SearchSvg;
  let fixture: ComponentFixture<SearchSvg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchSvg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchSvg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
