import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionFourForRatingComponent } from './question-four-for-rating.component';

describe('QuestionFourForRatingComponent', () => {
  let component: QuestionFourForRatingComponent;
  let fixture: ComponentFixture<QuestionFourForRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionFourForRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionFourForRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
