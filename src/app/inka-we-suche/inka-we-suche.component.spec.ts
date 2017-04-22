/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InkaWeSucheComponent } from './inka-we-suche.component';

describe('InkaWeSucheComponent', () => {
  let component: InkaWeSucheComponent;
  let fixture: ComponentFixture<InkaWeSucheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InkaWeSucheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InkaWeSucheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
