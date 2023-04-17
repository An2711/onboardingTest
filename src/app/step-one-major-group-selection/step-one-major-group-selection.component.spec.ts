import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepOneMajorGroupSelectionComponent } from './step-one-major-group-selection.component';

describe('StepOneMajorGroupSelectionComponent', () => {
  let component: StepOneMajorGroupSelectionComponent;
  let fixture: ComponentFixture<StepOneMajorGroupSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepOneMajorGroupSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepOneMajorGroupSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
