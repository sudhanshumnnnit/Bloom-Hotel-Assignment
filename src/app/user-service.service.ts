import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '../../node_modules/@angular/common/http';
import { throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  baseUrl="http://staybloom-interview.ap-southeast-1.elasticbeanstalk.com";
  userData:any;
  constructor(private http: HttpClient) { }

  saveUserDetails(obj){
    return this.http.post(this.baseUrl+'/profileAddress/addAddress',obj)
    .pipe(
      catchError(this.handleError)
    );
  }
  createNewProfile(obj){
    return this.http.post(this.baseUrl+'/profile/addProfile',obj)
    .pipe(
      catchError(this.handleError)
    );
  }
  getByProfileID(id){
    return this.http.get(this.baseUrl+'/profile/getProfileById/'+id)
    .pipe(
      catchError(this.handleError)
    );
  }
  updateAddress(obj){
    return this.http.put(this.baseUrl+'/profileAddress/updateAddress',obj)
    .pipe(
      catchError(this.handleError)
    );
  }
  updateProfile(obj){
    return this.http.put(this.baseUrl+'/profile/updateProfile',obj)
    .pipe(
      catchError(this.handleError)
    );
  }
  getByProfileName(name){
    return this.http.get(this.baseUrl+'/profile/getAllProfileByName/'+name)
    .pipe(
      catchError(this.handleError)
    );
  }
  saveUer(userProfile){
    this.userData=userProfile;
  }
  getUer(){
    return this.userData;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
  
}
