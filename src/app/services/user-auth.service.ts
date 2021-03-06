import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private httpClient: HttpClient) { }

  loginUser(baseURL: string, { username, password }: any) {
    return this.httpClient.post(baseURL, { username, password })
      .pipe(catchError(this.errorHandler));
  }

  loggedIn() {
    return !!localStorage.getItem("key");
  }

  logoutUser(baseURL: string, key: string) {
    return this.httpClient.post(baseURL, key)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
