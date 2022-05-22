import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  eventId:FormGroup;

  constructor(private X:FormBuilder) { }

  ngOnInit() {
    this.eventId=this.X.group({
      name:['',[Validators.required]],
      description:['',[Validators.required]],
      date:['',[Validators.required]],
      place:['',[Validators.required]],
      
    })

  }
  add(){

    
  }


}
