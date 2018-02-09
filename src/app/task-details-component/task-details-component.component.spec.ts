import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDetailsComponentComponent } from './task-details-component.component';

describe('TaskDetailsComponentComponent', () => {
  let component: TaskDetailsComponentComponent;
  let fixture: ComponentFixture<TaskDetailsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskDetailsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
