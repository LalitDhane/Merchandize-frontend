import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { User, UserApiResponse } from '../Models/User';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  public signUpForm!: FormGroup;
  public isSignUpSuccessfully: boolean = false;
  public signUpSuccessMessage!: string;
  constructor(private fb: FormBuilder, private userservice: UserService) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  public onSubmit(signUpForm: FormGroup): void {
    const userCredentials: User = {
      username: signUpForm.value.username,
      password: signUpForm.value.confirmPassword,
    };
    this.userservice.signInUser(userCredentials).subscribe({
      next: (userSignInResponse: UserApiResponse) => {
        this.isSignUpSuccessfully = true;
        this.signUpSuccessMessage = userSignInResponse.message;
      },
      error: (err) => {
        this.isSignUpSuccessfully = false;
        console.log(err);
      },
    });
  }
}
