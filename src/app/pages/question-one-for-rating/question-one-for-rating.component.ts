import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { Department, Professor } from "../../customInterfaces";
import { DataService } from '../../dataservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-one-for-rating',
  templateUrl: './question-one-for-rating.component.html',
  styleUrls: ['./question-one-for-rating.component.css']
})
export class QuestionOneForRatingComponent implements OnInit {

  // to be used in html file to know when professor item in dropdown has been selected
  public selectedProfessor: string;
  professors: Professor[] = [];
  constructor(private router: Router,
    private database: AngularFirestore,
    public dataservice: DataService) { }

  ngOnInit(): void {
    // const departmentDocRef = this.database.doc('departments/' + this.selectedDepartment.code);
    // this.database.collection<Professor>('professors', ref => ref.where('department', '==', departmentDocRef.ref))
    this.database.collection<Professor>('professors')
      .get()
      .subscribe(res => {
        res.docs.forEach((doc) => {
          this.professors.push(doc.data());
        });
      });
  }
}