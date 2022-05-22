import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  singupId:FormGroup;

  constructor(private X:FormBuilder) { }

  ngOnInit() {
    this.singupId=this.X.group({
      firstName:['',[Validators.required,Validators.minLength(3)]],
      lastName:['',[Validators.required,Validators.minLength(4)]],
      email:['',[Validators.email,Validators.required]],
      cin:['',[Validators.required,Validators.minLength(8),Validators.maxLength(8)]],
      pwd:['',[Validators.required]],
    }

    )
  }
  signup (f:any){
    console.log(f);
   
  }

}
