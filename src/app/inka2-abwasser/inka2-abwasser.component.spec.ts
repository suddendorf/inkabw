/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Inka2AbwasserComponent } from './inka2-abwasser.component';

describe('Inka2AbwasserComponent', () => {
  let component: Inka2AbwasserComponent;
  let fixture: ComponentFixture<Inka2AbwasserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Inka2AbwasserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Inka2AbwasserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
