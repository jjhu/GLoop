import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainviewPage } from './mainview.page';

describe('MainviewPage', () => {
  let component: MainviewPage;
  let fixture: ComponentFixture<MainviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
