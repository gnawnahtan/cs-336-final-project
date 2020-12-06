import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSelectionScreenForRatingComponent } from './course-selection-screen-for-rating.component';

describe('CourseSelectionScreenForRatingComponent', () => {
  let component: CourseSelectionScreenForRatingComponent;
  let fixture: ComponentFixture<CourseSelectionScreenForRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseSelectionScreenForRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseSelectionScreenForRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
