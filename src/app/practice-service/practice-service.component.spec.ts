import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeServiceComponent } from './practice-service.component';

describe('PracticeServiceComponent', () => {
  let component: PracticeServiceComponent;
  let fixture: ComponentFixture<PracticeServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticeServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
