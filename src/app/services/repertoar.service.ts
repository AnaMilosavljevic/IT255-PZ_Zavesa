import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepertoarService {
  private apiUrl = 'http://localhost:3000/shows';

  constructor(private http: HttpClient) { }

  getShows(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}