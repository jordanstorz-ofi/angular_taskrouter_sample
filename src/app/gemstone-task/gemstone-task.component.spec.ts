import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GemstoneTaskComponent } from './gemstone-task.component';

describe('GemstoneTaskComponent', () => {
  let component: GemstoneTaskComponent;
  let fixture: ComponentFixture<GemstoneTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GemstoneTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GemstoneTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
