import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginT1Component } from './login-t1.component';

describe('LoginT1Component', () => {
  let component: LoginT1Component;
  let fixture: ComponentFixture<LoginT1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginT1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginT1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
