import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireModule } from '@angular/fire';
import { ActivatedRouteSnapshot } from '@angular/router';

interface Department {
  name: string;
  viewName: string
}

interface Course {
  name: string;
  viewName: string
}

@Component({
  selector: 'app-course-selection-screen-for-rating',
  templateUrl: './course-selection-screen-for-rating.component.html',
  styleUrls: ['./course-selection-screen-for-rating.component.css']
})
export class CourseSelectionScreenForRatingComponent implements OnInit {

  public selectedDepartment: string;
  public selectedCourse: string;

  departments: Department[] = [];
  courses: Courses[] = [];

  constructor(private database: AngularFirestore) {
  }

  ngOnInit(): void {
    this.database.collection('departments')
      .get()
      .subscribe(res => {
        res.docs.forEach((doc) => {
          this.departments.push(doc.data());
        });
      });
    this.database.collection('courses')
      .get()
      .subscribe(res => {
        res.docs.forEach((doc) => {
          this.courses.push(doc.data());
        });
      });
  }



  csCourses: Course[] = [
    { name: 'CS 108', viewName: 'CS 108' },
    { name: 'CS 112', viewName: 'CS 112' },
    { name: 'CS 212', viewName: 'CS 212' },
  ];
  mathCourses: Course[] = [
    { name: 'Math 251', viewName: 'Math 251' },
    { name: 'Math 252', viewName: 'Math 252' },
    { name: 'Stat 243', viewName: 'Stat 243' },
  ];
  engrCourses: Course[] = [
    { name: 'Engr 220', viewName: 'Engr 220' },
  ];

}