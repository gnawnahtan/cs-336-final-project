import { Component, OnInit } from '@angular/core';

interface Course{
  name: string;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent{

  foods: Course[] = [
    {name: 'CS 108'},
    {name: 'CS 112'},
    {name: 'CS 212'}
  ];

}
