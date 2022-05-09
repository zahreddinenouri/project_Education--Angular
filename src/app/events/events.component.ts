import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events:any=[]

  constructor() { }

  ngOnInit() {
    this.events=[{id:1,date:'24',dateM :'feb', placeE:'london'},
    {id:2,dateE:'24',dateM :'march', placeE:'paris'},
    {id:3,dateE:'10',dateM :'sep', placeE:'sfax'},
    {id:4,dateE:'10',dateM :'jav', placeE:'lbarcelone'},

  
  ]
  }

}
