import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsjxOperatorComponent } from './rsjx-operator.component';

describe('RsjxOperatorComponent', () => {
  let component: RsjxOperatorComponent;
  let fixture: ComponentFixture<RsjxOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RsjxOperatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RsjxOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
