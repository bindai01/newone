import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Promis2Component } from './promis2.component';

describe('Promis2Component', () => {
  let component: Promis2Component;
  let fixture: ComponentFixture<Promis2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Promis2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Promis2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
