import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerMenuSvg } from './burger-menu-svg';

describe('BurgerMenuSvg', () => {
  let component: BurgerMenuSvg;
  let fixture: ComponentFixture<BurgerMenuSvg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BurgerMenuSvg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurgerMenuSvg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
