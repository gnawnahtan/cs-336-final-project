import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseProfileForViewingComponent } from './pages/course-profile-for-viewing/course-profile-for-viewing.component';
import { CourseSelectionScreenForRatingComponent } from './pages/course-selection-screen-for-rating/course-selection-screen-for-rating.component';
import { CourseSelectionScreenForViewingComponent } from './pages/course-selection-screen-for-viewing/course-selection-screen-for-viewing.component';
import { LoginScreenComponent } from './pages/login-screen/login-screen.component';
import { RateCourseScreenComponent } from './pages/rate-course-screen/rate-course-screen.component';
import { RegisterComponent } from './pages/register/register.component';
import { StartScreenComponent } from './pages/start-screen/start-screen.component';

const routes: Routes = [
  { path: "login-screen", component: LoginScreenComponent },
  { path: "start-screen", component: StartScreenComponent },
  { path: "course-selection-screen-for-rating", component: CourseSelectionScreenForRatingComponent },
  { path: "rate-course-screen", component: RateCourseScreenComponent },
  { path: "course-selection-screen-for-viewing", component: CourseSelectionScreenForViewingComponent },
  { path: "course-profile-for-viewing", component: CourseProfileForViewingComponent },
  { path: "register", component: RegisterComponent },

  { path: "**", redirectTo: "login-screen" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
