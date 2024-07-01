import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: User | null = null;
  private usersUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<User | null> {
    return this.http.get<User[]>(this.usersUrl).pipe(
      map(users => {
        const user = users.find(user => user.username === username && user.password === password);
        if (user) {
          this.currentUser = user;
        }
        return user || null;
      })
    );
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }

  logout(): void {
    this.currentUser = null;
  }
}
