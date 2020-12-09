import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionThreeForRatingComponent } from './question-three-for-rating.component';

describe('QuestionThreeForRatingComponent', () => {
  let component: QuestionThreeForRatingComponent;
  let fixture: ComponentFixture<QuestionThreeForRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionThreeForRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionThreeForRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
