import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseProfileForViewingComponent } from './course-profile-for-viewing.component';

describe('CourseProfileForViewingComponent', () => {
  let component: CourseProfileForViewingComponent;
  let fixture: ComponentFixture<CourseProfileForViewingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseProfileForViewingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseProfileForViewingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
