import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { Router } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-course-selection-screen-for-rating',
  templateUrl: './course-selection-screen-for-rating.component.html',
  styleUrls: ['./course-selection-screen-for-rating.component.css']
})

export class CourseSelectionScreenForRatingComponent implements OnInit {

  public selectedDepartment: Department;
  public selectedCourse: Courses;

  departments: Department[] = [];
  deptCourses: Courses[] = [];

  constructor(private database: AngularFirestore, private router: Router) {
  }

  ngOnInit(): void {
    this.database.collection<Department>('departments')
      .get()
      .subscribe(res => {
        res.docs.forEach((doc) => {
          this.departments.push(doc.data());
        });
      });
  }

  changeDepartment() {
    this.deptCourses = [];

    const departmentDocRef = this.database.doc('departments/' + this.selectedDepartment);
    this.database
      .collection<Courses>('courses', ref => ref.where('department', '==', departmentDocRef.ref))
      .get()
      .subscribe(res => {
        res.docs.forEach((doc) => {
          this.deptCourses.push(doc.data());
          console.log(this.deptCourses);
        });
      });
  }

  changeCourse() {
    console.log(this.selectedCourse);
  }

}

interface Department {
  title: string;
  code: string;
}

interface Courses {
  id: number;
  title: string;
  description: string;
  department: string;
}