import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSvg } from './login-svg';

describe('LoginSvg', () => {
  let component: LoginSvg;
  let fixture: ComponentFixture<LoginSvg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginSvg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginSvg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
