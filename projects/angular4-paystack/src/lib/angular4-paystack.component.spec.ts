import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular4PaystackComponent } from './angular4-paystack.component';
import { Angular4PaystackService } from './angular4-paystack.service';
import { PUBLIC_KEY_TOKEN } from './paystack-token';

describe('Angular4PaystackComponent', () => {
  let component: Angular4PaystackComponent;
  let fixture: ComponentFixture<Angular4PaystackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Angular4PaystackComponent ],
      providers: [
        Angular4PaystackService,
        { provide: PUBLIC_KEY_TOKEN, useValue: 'public-key' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Angular4PaystackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
