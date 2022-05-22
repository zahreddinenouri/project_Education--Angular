import { Component, Input, OnInit } from '@angular/core';
import { allTeacher } from 'src/app/data/dataTeacher';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  @Input()a:any;
  

  constructor() { }

  ngOnInit() {
    
    
  }

}
