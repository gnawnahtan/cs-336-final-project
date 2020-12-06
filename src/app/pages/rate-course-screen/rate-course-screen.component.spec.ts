import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateCourseScreenComponent } from './rate-course-screen.component';

describe('RateCourseScreenComponent', () => {
  let component: RateCourseScreenComponent;
  let fixture: ComponentFixture<RateCourseScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateCourseScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RateCourseScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
