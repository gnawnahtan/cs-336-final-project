import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { Course, Department } from "../../customInterfaces";
import { DataService } from '../../dataservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-selection-screen-for-viewing',
  templateUrl: './course-selection-screen-for-viewing.component.html',
  styleUrls: ['./course-selection-screen-for-viewing.component.css']
})
export class CourseSelectionScreenForViewingComponent implements OnInit {

  // to be used in html file for ngIf displays
  public selectedDepartment: Department;
  public selectedCourse: Course;

  departments: Department[] = [];
  deptCourses: Course[] = [];

  constructor(private database: AngularFirestore, public dataservice: DataService, private router: Router) {
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

  // navigate to course viewing screen
  goToNext() {
    this.router.navigate([`${'/course-profile-for-viewing'}`]);
  }
}