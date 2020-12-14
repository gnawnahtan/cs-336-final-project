import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginScreenComponent } from './pages/login-screen/login-screen.component';
import { StartScreenComponent } from './pages/start-screen/start-screen.component';
import { CourseSelectionScreenForRatingComponent } from './pages/course-selection-screen-for-rating/course-selection-screen-for-rating.component';
import { CourseSelectionScreenForViewingComponent } from './pages/course-selection-screen-for-viewing/course-selection-screen-for-viewing.component';
import { CourseProfileForViewingComponent } from './pages/course-profile-for-viewing/course-profile-for-viewing.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRippleModule } from '@angular/material/core';

import { firebaseConfig } from './credentials';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { QuestionOneForRatingComponent } from './pages/question-one-for-rating/question-one-for-rating.component';
import { QuestionTwoForRatingComponent } from './pages/question-two-for-rating/question-two-for-rating.component';
import { QuestionThreeForRatingComponent } from './pages/question-three-for-rating/question-three-for-rating.component';
import { QuestionFourForRatingComponent } from './pages/question-four-for-rating/question-four-for-rating.component';
import { LogOutDialogComponent } from './components/log-out-dialog/log-out-dialog.component';
import { ReviewDialogComponent } from './components/review-dialog/review-dialog.component';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    StartScreenComponent,
    CourseSelectionScreenForRatingComponent,
    CourseSelectionScreenForViewingComponent,
    CourseProfileForViewingComponent,
    RegisterComponent,
    QuestionOneForRatingComponent,
    QuestionTwoForRatingComponent,
    QuestionThreeForRatingComponent,
    QuestionFourForRatingComponent,
    LogOutDialogComponent,
    ReviewDialogComponent,
    LoginDialogComponent,
    ConfirmDialogComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    MatSelectModule,
    MatProgressBarModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    MatChipsModule,
    MatDividerModule,
    MatFormFieldModule,
    MatRippleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
