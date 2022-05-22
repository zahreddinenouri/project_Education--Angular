import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { allTeacher } from 'src/app/data/dataTeacher';

@Component({
  selector: 'app-teacher-info',
  templateUrl: './teacher-info.component.html',
  styleUrls: ['./teacher-info.component.css']
})
export class TeacherInfoComponent implements OnInit {
  teacher=allTeacher;
  teacherId:any;
  findTeacher:any;
  
  constructor(private activatedRout:ActivatedRoute) { }

  ngOnInit() {
    this.findTeacher=this.teacher.find(
      obj =>{return obj.id==this.teacherId}
    )

   
  }

}
