import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private username: string;
  private client_id = 'd42e79e66af579497b2f';
  private client_secret = '20cb00fd5ded7f0a2bede1f9149c07d9485925a4';

  constructor(private _http: HttpClient) {
    this.username = 'bradtraversy';
  }

  updateUser(username: string) {
    this.username = username;
  }

  getUser() {
    return this._http.get('https://api.github.com/users/' + this.username +
      '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error(error);
          return throwError(() => error || 'Hubo un error');
        })
      );
  }  
  

  getRepos() {
    return this._http.get('https://api.github.com/users/' + this.username + '/repos' +
      '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error(error);
          return throwError(() => error || 'Hubo un error');
        })
      );
  }
}


