import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceTasksComponent } from './workspace-tasks.component';

describe('WorkspaceTasksComponent', () => {
  let component: WorkspaceTasksComponent;
  let fixture: ComponentFixture<WorkspaceTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkspaceTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkspaceTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
