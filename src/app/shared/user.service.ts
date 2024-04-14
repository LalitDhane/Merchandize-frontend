import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserApiResponse, User } from '../Models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly LOGINURL: string =
    'https://homemadebags-backend.onrender.com/api/user/login';
  private readonly SIGNINURL: string =
    'https://homemadebags-backend.onrender.com/api/user/signin';

  constructor(private httpClient: HttpClient) {}

  public loginUser(user: User): Observable<UserApiResponse> {
    return this.httpClient.post<UserApiResponse>(this.LOGINURL, user);
  }

  public signInUser(user: User): Observable<UserApiResponse> {
    return this.httpClient.post<UserApiResponse>(this.SIGNINURL, user);
  }
}
