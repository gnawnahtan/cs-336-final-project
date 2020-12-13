import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { Course, Department, Rating, Professor } from "../../customInterfaces";
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
  averageLetter : string = '?';
  professors : Professor[] = [];
  topProfessor : string = "";

  commendations : string[] = [];
  concerns : string[] = [];

  static letterGrades = [
    {grade: 4, letter: 'A'}, {grade: 3.7, letter: 'A-'},
    {grade: 3.3, letter: 'B+'}, {grade: 3.0, letter: 'B'}, {grade: 2.7, letter: 'B-'},
    {grade: 2.3, letter: 'C+'}, {grade: 2.0, letter: 'C'}, {grade: 1.7, letter: 'C-'},
    {grade: 1.3, letter: 'D+'}, {grade: 1.0, letter: 'D'}, {grade: 0.0, letter: 'E'},
  ]

  constructor(private database: AngularFirestore, public dataservice: DataService) { }

  ngOnInit(): void {
    this.selectedCourse = this.dataservice.course;
    this.selectedDepartment = this.dataservice.department;

    this.getData();

    //console.log(this.courseRatings);

    this.selectedDepartment.code = this.selectedDepartment.code.toUpperCase();
  }

  getData() : void {
    const courseDocRef = this.database.doc('courses/' + this.selectedDepartment.code + '-' + this.selectedCourse.id);

    this.database
    .collection<Rating>('ratings', ref => ref.where('courseId', '==', courseDocRef.ref))
    .get()
    .subscribe(async res => {
      await res.docs.forEach((doc) => {
        this.courseRatings.push(doc.data());
        console.log(this.courseRatings);
      });
      this.averageGrade = this.courseRatings.reduce((total, next) => total + next.grade, 0) / this.courseRatings.length;
      this.averageLetter = this.getLetterGrade(this.averageGrade);

      let profCounts = {};
      this.courseRatings.forEach(function(x) { profCounts[x.professor] = (profCounts[x.professor] || 0) + 1; }) //https://stackoverflow.com/a/19395302/14404345
      
      for(const prop in profCounts) {
        this.database.collection<Professor>('professors').doc(prop).get()
          .subscribe(async res => {
            await this.professors.push(res.data());
            this.topProfessor = this.professors[0].firstName + " " + this.professors[0].lastName;
          });
      }

      this.courseRatings.forEach(element => {
        this.commendations = this.commendations.concat(element.commendations);
      });
      this.courseRatings.forEach(element => {
        this.concerns = this.concerns.concat(element.concerns);
      });
    });
  }


  getLetterGrade(grade : number) : string {
    let letter = '?';

    CourseProfileForViewingComponent.letterGrades.some(function(el) {
      letter = el.letter;
      return grade >= el.grade;
    });

    return letter;
  }
}
