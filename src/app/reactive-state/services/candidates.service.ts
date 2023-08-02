import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, delay, Observable, tap} from "rxjs";
import {Candidate} from "../models/candidate.model";

@Injectable()
export class CandidatesService {

  constructor(private http: HttpClient) { }

  private _loading$ = new BehaviorSubject<boolean>(false);
  get loading$(): Observable<boolean> {
    return this._loading$.asObservable();
  }

  private _candidates$ = new BehaviorSubject<Candidate[]>([]);
  get candidates$(): Observable<Candidate[]> {
    return this._candidates$.asObservable();
  }

  private lastCandidateLoad = 0;

  private setLoadingStatus(status: boolean) {
    this._loading$.next(status);
  }

  getCandidatesFromServer() {
    if(Date.now() - this.lastCandidateLoad <= 3000000) {
      return;
    }
    this.setLoadingStatus(true);
    this.http.get<Candidate[]>('http://localhost:3000/candidates').pipe(
      delay(1000),
      tap(candidates => {
        this.lastCandidateLoad = Date.now();
        this._candidates$.next(candidates);
        this.setLoadingStatus(false);
      })
    ).subscribe();
  }
}
