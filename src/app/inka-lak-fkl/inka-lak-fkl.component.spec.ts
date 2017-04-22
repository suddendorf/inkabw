/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InkaLakFklComponent } from './inka-lak-fkl.component';

describe('InkaLakFklComponent', () => {
  let component: InkaLakFklComponent;
  let fixture: ComponentFixture<InkaLakFklComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InkaLakFklComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InkaLakFklComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
