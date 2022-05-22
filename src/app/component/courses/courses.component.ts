import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  coursesTab:any={}
  coursId:any;
  findCours:any;
  constructor() { }

  ngOnInit() {
    

    this.coursesTab
    =[
{id:1,nameCours:'java',nameProf:'ali',price:'200dt'},
{id:2,nameCours:'javaScript',nameProf:'abderrahmen',price:'500dt'},
{id:3,nameCours:'python',nameProf:'sami',price:'100dt'},


]
    
  }
  

}
