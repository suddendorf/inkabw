/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Inka2WeComponent } from './inka2-we.component';

describe('Inka2WeComponent', () => {
  let component: Inka2WeComponent;
  let fixture: ComponentFixture<Inka2WeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Inka2WeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Inka2WeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
