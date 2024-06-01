import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flight } from '../models/flight.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private API_URL = 'http://localhost:3000/flights';

  constructor(private http: HttpClient) { }

  getRooms(): Observable<Flight[]> {
    return this.http.get<Flight[]>(this.API_URL);
  }

  getRoom(roomNumber: string): Observable<Flight> {
    return this.http.get<Flight>(`${this.API_URL}/${roomNumber}`);
  }

  createRoom(room: Flight): Observable<Flight> {
    return this.http.post<Flight>(this.API_URL, room, httpOptions);
  }

  updateRoom(room: Flight): Observable<Flight> {
    return this.http.put<Flight>(`${this.API_URL}/${room.roomNumber}`, room, httpOptions);
  }

  deleteRoom(roomNumber: string): Observable<Flight> {
    return this.http.delete<Flight>(`${this.API_URL}/${roomNumber}`, httpOptions);
  }
}
