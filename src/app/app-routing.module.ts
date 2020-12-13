import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseProfileForViewingComponent } from './pages/course-profile-for-viewing/course-profile-for-viewing.component';
import { CourseSelectionScreenForRatingComponent } from './pages/course-selection-screen-for-rating/course-selection-screen-for-rating.component';
import { CourseSelectionScreenForViewingComponent } from './pages/course-selection-screen-for-viewing/course-selection-screen-for-viewing.component';
import { LoginScreenComponent } from './pages/login-screen/login-screen.component';
import { QuestionFourForRatingComponent } from './pages/question-four-for-rating/question-four-for-rating.component';
import { QuestionOneForRatingComponent } from './pages/question-one-for-rating/question-one-for-rating.component';
import { QuestionThreeForRatingComponent } from './pages/question-three-for-rating/question-three-for-rating.component';
import { QuestionTwoForRatingComponent } from './pages/question-two-for-rating/question-two-for-rating.component';
import { RegisterComponent } from './pages/register/register.component';
import { StartScreenComponent } from './pages/start-screen/start-screen.component';

const routes: Routes = [
  { path: "login-screen", component: LoginScreenComponent },
  { path: "start-screen", component: StartScreenComponent },
  { path: "course-selection-screen-for-rating", component: CourseSelectionScreenForRatingComponent },
  { path: "course-selection-screen-for-viewing", component: CourseSelectionScreenForViewingComponent },
  { path: "course-profile-for-viewing", component: CourseProfileForViewingComponent },
  { path: "register", component: RegisterComponent },
  { path: "question-one-for-rating", component: QuestionOneForRatingComponent },
  { path: "question-two-for-rating", component: QuestionTwoForRatingComponent },
  { path: "question-three-for-rating", component: QuestionThreeForRatingComponent },
  { path: "question-four-for-rating", component: QuestionFourForRatingComponent },


  { path: "**", redirectTo: "login-screen" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
