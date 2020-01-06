import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { IEmployee } from './employee';
import {catchError} from 'rxjs/operators';
import { Observable, throwError as observableThrowError} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  updateEmp = new IEmployee();
  baseURL: string = "http://localhost:8080/employees";

  constructor(private http: HttpClient) { }

  getEmployees(){
    //httpOptions.headers.append('Access-Control-Allow-Origin', 'http://localhost:8080');

    return this.http.get<IEmployee[]>(this.baseURL).pipe(
      catchError(this.errorHandler)
    );
  }

  postEmployee(emp: IEmployee){
    return this.http.post(this.baseURL, emp).pipe(
      catchError(this.errorHandler)
    );
  }

  updateEmployee(emp:IEmployee, id){
    return this.http.put(this.baseURL+"/"+id, emp).pipe(
      catchError(this.errorHandler)
    );
  }

  errorHandler(error: HttpErrorResponse){
    return observableThrowError(error.message || "Server Error");
 }
}
