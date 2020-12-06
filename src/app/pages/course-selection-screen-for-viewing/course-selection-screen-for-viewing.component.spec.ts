import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSelectionScreenForViewingComponent } from './course-selection-screen-for-viewing.component';

describe('CourseSelectionScreenForViewingComponent', () => {
  let component: CourseSelectionScreenForViewingComponent;
  let fixture: ComponentFixture<CourseSelectionScreenForViewingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseSelectionScreenForViewingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseSelectionScreenForViewingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
