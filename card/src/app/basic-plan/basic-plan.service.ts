import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BasicPlanService {
  private apiUrl = 'http://localhost:3000/plans';

  constructor(private http: HttpClient) {}

  getPlans(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
