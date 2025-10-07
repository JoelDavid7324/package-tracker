import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappSvg } from './whatsapp-svg';

describe('WhatsappSvg', () => {
  let component: WhatsappSvg;
  let fixture: ComponentFixture<WhatsappSvg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatsappSvg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatsappSvg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
