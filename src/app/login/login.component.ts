import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { UserApiResponse, UserDetails } from '../Models/User';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public isLoginFailed: boolean = false;
  public loginErrorMessage!: string;
  public loginSuccessMessage!: string;
  public userDetails: UserDetails = {
    username: '',
    isLoggedIn: false,
  };
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  public onSubmit(loginForm: FormGroup): void {
    this.userService.loginUser(loginForm.value).subscribe({
      next: (loginResponse: UserApiResponse) => {
        this.isLoginFailed = false;
        this.loginSuccessMessage = loginResponse.message;
        this.userDetails.username = loginResponse.data[0];
        this.userDetails.isLoggedIn = true;
        localStorage.setItem('userDetails', JSON.stringify(this.userDetails));
        this.router.navigateByUrl('/home');
      },
      error: (err) => {
        this.isLoginFailed = true;
        this.loginErrorMessage = err.error.message;
        console.log(err);
      },
    });
  }
}
