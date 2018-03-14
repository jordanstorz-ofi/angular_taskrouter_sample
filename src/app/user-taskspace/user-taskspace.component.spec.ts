import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTaskspaceComponent } from './user-taskspace.component';

describe('UserTaskspaceComponent', () => {
  let component: UserTaskspaceComponent;
  let fixture: ComponentFixture<UserTaskspaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTaskspaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTaskspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
