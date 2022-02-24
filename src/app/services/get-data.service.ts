import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { ApiResponse } from '../models/offer.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  private API_URL = 'https://remotive.io/api/remote-jobs'

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<ApiResponse>(this.API_URL).pipe(
      tap(data => data)
    )
  }
}