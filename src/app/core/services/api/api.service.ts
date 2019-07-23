import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {catchError} from 'rxjs/operators';
import {NotificatorService} from '../common/notificator.service';
import {AuthService} from '../common/auth.service';
import {debug} from 'util';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private notificator: NotificatorService,
    private authService: AuthService
  ) { }

  private formatErrors(error: any, showError) {
    if (showError) {
      this.notificator.showRPCError(error.error);
    }
    return throwError(error.error);
  }

  getHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', this.authService.getAuthorizationHeaderValue());
    return headers;
  }

  get(path: string, params: HttpParams = new HttpParams(), showError = true): Observable<any> {
    return this.http.get(`${environment.api_url}${path}`, { headers: this.getHeaders() })
      .pipe(catchError(err => this.formatErrors(err, showError)));
  }

  put(path: string, body: Object = {}, showError = true): Observable<any> {
    return this.http.put(
      `${environment.api_url}${path}`,
      JSON.stringify(body), { headers: this.getHeaders() }
    ).pipe(catchError(err => this.formatErrors(err, showError)));
  }

  post(path: string, body: Object = {}, showError = true): Observable<any> {
    let headers = this.getHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.http.post(
      `${environment.api_url}${path}`,
      JSON.stringify(body),
      {headers: headers}
    ).pipe(catchError(err => this.formatErrors(err, showError)));
  }

  delete(path, showError = true): Observable<any> {
    return this.http.delete(
      `${environment.api_url}${path}`,
      { headers: this.getHeaders() }
    ).pipe(catchError(err => this.formatErrors(err, showError)));
  }
}
