import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaregiversPage } from './caregivers.page';

describe('CaregiversPage', () => {
  let component: CaregiversPage;
  let fixture: ComponentFixture<CaregiversPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaregiversPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaregiversPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
