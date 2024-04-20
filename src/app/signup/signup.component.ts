import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { User, UserApiResponse } from '../Models/User';
import { passwordMissMatch } from '../shared/customValidators';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  public signUpForm!: FormGroup;
  public isSignUpSuccessfully: boolean = false;
  public signUpSuccessMessage!: string;
  public loading: boolean = false;
  constructor(private fb: FormBuilder, private userservice: UserService) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          passwordMissMatch('password'),
        ],
      ],
    });
  }

  public onSubmit(signUpForm: FormGroup): void {
    this.loading = true;
    const userCredentials: User = {
      username: signUpForm.value.username,
      password: signUpForm.value.confirmPassword,
    };
    this.userservice.signInUser(userCredentials).subscribe({
      next: (userSignInResponse: UserApiResponse) => {
        this.isSignUpSuccessfully = true;
        this.signUpSuccessMessage = userSignInResponse.message;
        this.loading = false;
      },
      error: (err) => {
        this.isSignUpSuccessfully = false;
        console.log(err);
        this.loading = false;
      },
    });
  }
}
