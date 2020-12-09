import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionOneForRatingComponent } from './question-one-for-rating.component';

describe('QuestionOneForRatingComponent', () => {
  let component: QuestionOneForRatingComponent;
  let fixture: ComponentFixture<QuestionOneForRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionOneForRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionOneForRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
