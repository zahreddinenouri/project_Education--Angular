import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { allTeacher } from 'src/app/data/dataTeacher';

@Component({
  selector: 'app-teacher-table',
  templateUrl: './teacher-table.component.html',
  styleUrls: ['./teacher-table.component.css']
})
export class TeacherTableComponent implements OnInit {
  tutors:any={}
teacherId:any;
teacher:any={}
  constructor(private router:Router,private activated:ActivatedRoute) { }

  ngOnInit() {
    this.tutors=[
      {id:1,name:'saleh',lastName:'nouri'},
      {id:2,name:'ali',lastName:'hajlawi'},
      {id:3,name:'salem',lastName:'riahi'},
      {id:4,name:'kaml',lastName:'youns'},
      {id:5,name:'riadh',lastName:'hamdi'},
    ]
    //this.teacherId=this.activated.snapshot.paramMap.get('id');
   // this.teacher=this.teacher.find(
     // obj=>{return obj.id==this.teacherId}
    //)
    
  }
  displayTeacher(x:number){
  //this.router.navigate([`teacherInfo/${x}`]);
 this.router.navigate([`teacherInfo/${x}`]);
  }

}
