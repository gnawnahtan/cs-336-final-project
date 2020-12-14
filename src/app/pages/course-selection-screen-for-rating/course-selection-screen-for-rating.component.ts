import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { Course, Department } from '../../customInterfaces';
import { Router } from '@angular/router';
import { DataService } from '../../dataservice';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-course-selection-screen-for-rating',
  templateUrl: './course-selection-screen-for-rating.component.html',
  styleUrls: ['./course-selection-screen-for-rating.component.css']
})

export class CourseSelectionScreenForRatingComponent implements OnInit {

  public selectedDepartment: Department;
  public selectedCourse: Course;

  departments: Department[] = [];
  deptCourses: Course[] = [];

  constructor(private database: AngularFirestore,
    private router: Router,
    public dataservice: DataService) {
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

  ngOnDestroy() {
    this.dataservice.course = this.selectedCourse;
    this.dataservice.department = this.selectedDepartment;
  }

  changeDepartment() {
    this.deptCourses = [];
    const departmentDocRef = this.database.doc('departments/' + this.selectedDepartment.code);
    this.database
      .collection<Course>('courses', ref => ref.where('department', '==', departmentDocRef.ref))
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