/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InkaAbwasserComponent } from './inka-abwasser.component';

describe('InkaAbwasserComponent', () => {
  let component: InkaAbwasserComponent;
  let fixture: ComponentFixture<InkaAbwasserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InkaAbwasserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InkaAbwasserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
