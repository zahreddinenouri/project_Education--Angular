import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { coursesTab } from 'src/app/data/coursData';

@Component({
  selector: 'app-cours-info',
  templateUrl: './cours-info.component.html',
  styleUrls: ['./cours-info.component.css']
})
export class CoursInfoComponent implements OnInit {
  coursId:any;
  cours=coursesTab;
  findCours:any;

  constructor(private activatedRouter:ActivatedRoute) { }

  ngOnInit() {
    this.coursId=this.activatedRouter.snapshot.paramMap.get('id')
    this.findCours=this.cours.find(
      obj=>{return obj.id==this.coursId}
    );
  }

}
