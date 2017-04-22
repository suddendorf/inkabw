/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InkaLakBComponent } from './inka-lak-b.component';

describe('InkaLakBComponent', () => {
  let component: InkaLakBComponent;
  let fixture: ComponentFixture<InkaLakBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InkaLakBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InkaLakBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
