import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses-table',
  templateUrl: './courses-table.component.html',
  styleUrls: ['./courses-table.component.css']
})
export class CoursesTableComponent implements OnInit {
  coursesTab:any;
  coursId:any;
  findCours:any;
  constructor(private myRouter:Router,private activated:ActivatedRoute) { }

  ngOnInit() {
    


    this.coursesTab=[
      {id:1,nameCours:'java',nameProf:'ali',price:'200dt'},
      {id:2,nameCours:'javaScript',nameProf:'abderrahmen',price:'500dt'},
      {id:3,nameCours:'python',nameProf:'sami',price:'100dt'},
      

    ]
  }
  displayCours(x){
    this.myRouter.navigate([`coursInfo/${x}`]);
  }

}
