/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InkaLakListeComponent } from './inka-lak-liste.component';

describe('InkaLakListeComponent', () => {
  let component: InkaLakListeComponent;
  let fixture: ComponentFixture<InkaLakListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InkaLakListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InkaLakListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
