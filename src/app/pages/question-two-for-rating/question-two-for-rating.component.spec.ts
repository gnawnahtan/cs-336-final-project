import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionTwoForRatingComponent } from './question-two-for-rating.component';

describe('QuestionTwoForRatingComponent', () => {
  let component: QuestionTwoForRatingComponent;
  let fixture: ComponentFixture<QuestionTwoForRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionTwoForRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionTwoForRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
