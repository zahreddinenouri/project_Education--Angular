import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutors',
  templateUrl: './tutors.component.html',
  styleUrls: ['./tutors.component.css']
})
export class TutorsComponent implements OnInit {
tutors:any={};
  constructor() { }

  ngOnInit() {
    this.tutors=[
      {id:1,name:'saleh',lastName:'nouri'},
      {id:2,name:'ali',lastName:'hajlawi'},
      {id:3,name:'salem',lastName:'riahi'},
      {id:4,name:'kaml',lastName:'youns'},
      {id:5,name:'riadh',lastName:'hamdi'},
    ]
  }

}
