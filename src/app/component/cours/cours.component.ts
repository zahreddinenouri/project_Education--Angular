import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {
  @Input() x:any;
  coursesTab:any={};

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
