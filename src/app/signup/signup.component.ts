import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm?:UntypedFormGroup;
  constructor(private fb : UntypedFormBuilder) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      username:['',Validators.required],
      password1:['',[Validators.required,Validators.min(8)]],
      password2:['',[Validators.required,Validators.min(8)]]
    })
  }

}
