import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ComplexFormValue} from "../models/complex-form-value.model";
import {catchError, delay, map, Observable, of} from "rxjs";

@Injectable()
export class ComplexFormService {
  constructor(private http: HttpClient) {
  }

  saveUserInfo(formValue: ComplexFormValue): Observable<boolean>{
    return this.http.post('http://localhost:3000/users', formValue).pipe(
      map(() => true),
      delay(1000),
      catchError(() => of(false).pipe(
        delay(1000)
      ))
    );
  }
}
