import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginScreenComponent } from './pages/login-screen/login-screen.component';
import { StartScreenComponent } from './pages/start-screen/start-screen.component';
import { CourseSelectionScreenForRatingComponent } from './pages/course-selection-screen-for-rating/course-selection-screen-for-rating.component';
import { RateCourseScreenComponent } from './pages/rate-course-screen/rate-course-screen.component';
import { CourseSelectionScreenForViewingComponent } from './pages/course-selection-screen-for-viewing/course-selection-screen-for-viewing.component';
import { CourseProfileForViewingComponent } from './pages/course-profile-for-viewing/course-profile-for-viewing.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    StartScreenComponent,
    CourseSelectionScreenForRatingComponent,
    RateCourseScreenComponent,
    CourseSelectionScreenForViewingComponent,
    CourseProfileForViewingComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
