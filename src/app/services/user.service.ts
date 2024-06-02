import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

interface User {
  id?: number;
  username: string;
  password: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  addUser(user: User): Observable<User> {
    return this.http.get<User[]>(this.apiUrl).pipe(
      map(users => users.length > 0 ? Math.max(...users.map(u => u.id || 0)) + 1 : 1),
      switchMap(newId => {
        user.id = newId;
        return this.http.post<User>(this.apiUrl, user);
      })
    );
  }

  getUser(username: string, password: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}?username=${username}&password=${password}`);
  }
}
