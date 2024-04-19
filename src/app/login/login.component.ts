import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { UserApiResponse } from '../Models/User';
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
  public user?: string;
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
        this.user = loginResponse.data[0];
        localStorage.setItem('user', this.user);
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
