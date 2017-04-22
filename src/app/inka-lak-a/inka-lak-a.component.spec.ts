/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InkaLakAComponent } from './inka-lak-a.component';

describe('InkaLakAComponent', () => {
  let component: InkaLakAComponent;
  let fixture: ComponentFixture<InkaLakAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InkaLakAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InkaLakAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
