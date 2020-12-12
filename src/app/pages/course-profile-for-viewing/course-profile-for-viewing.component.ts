import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { Course, Department, Rating } from "../../customInterfaces";
import { DataService } from '../../dataservice';

@Component({
  selector: 'app-course-profile-for-viewing',
  templateUrl: './course-profile-for-viewing.component.html',
  styleUrls: ['./course-profile-for-viewing.component.css']
})
export class CourseProfileForViewingComponent implements OnInit {
  selectedCourse : Course;
  selectedDepartment : Department;
  courseRatings : Rating[] = [];
  averageGrade : number = 0;

  constructor(private database: AngularFirestore, public dataservice: DataService) { }

  ngOnInit(): void {
    this.selectedCourse = this.dataservice.course;
    this.selectedDepartment = this.dataservice.department;

    const courseDocRef = this.database.doc('courses/' + this.selectedDepartment.code + '-' + this.selectedCourse.id);

    this.database
      .collection<Rating>('ratings', ref => ref.where('courseID', '==', courseDocRef.ref))
      .get()
      .subscribe(res => {
        res.docs.forEach((doc) => {
          this.courseRatings.push(doc.data());
          console.log(this.courseRatings);
          this.averageGrade = this.courseRatings.reduce((total, next) => total + next.grade, 0) / this.courseRatings.length;
        });
      });

    console.log(this.courseRatings);

    this.selectedDepartment.code = this.selectedDepartment.code.toUpperCase();
  }

}
