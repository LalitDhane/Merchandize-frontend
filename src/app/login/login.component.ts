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
  public loginMessage!: string;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.min(8)]],
    });
  }

  public onSubmit(loginForm: FormGroup): void {
    this.userService.loginUser(loginForm.value).subscribe({
      next: (loginResponse: UserApiResponse) => {
        if (loginResponse.status === 'success') {
          this.isLoginFailed = false;
          this.router.navigateByUrl('/home');
        } else {
          this.isLoginFailed = true;
          this.loginMessage = loginResponse.message;
        }
      },
    });
  }
}
