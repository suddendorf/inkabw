/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InkaWEComponent } from './inka-we.component';

describe('InkaWEComponent', () => {
  let component: InkaWEComponent;
  let fixture: ComponentFixture<InkaWEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InkaWEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InkaWEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
