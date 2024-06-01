import { Injectable } from '@angular/core';
import { FlightPriceService } from './flight-price.service';
import { Room } from '../room/room.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})

export class FlightService {
  API_URL: string = "http://localhost:3000/flights";

  constructor(public http: HttpClient) { }

  getRooms() {
    return this.http.get<Room[]>(this.API_URL);
  }

  getRoom(id: number) {
    return this.http.get<Room>(`${this.API_URL}/${id}`);
  }

  create(room: Room) {
    return this.http.post<Room>(this.API_URL, room);
  }

  update(room: Room) {
    return this.http.put<Room>(`${this.API_URL}/${room.roomno}`, room);
  }

  delete(room: Room) {

    return this.http.delete<Room>(`${this.API_URL}/${room.roomno}`);
  }

  list() {
    return this.http.get(`${this.API_URL}`);
  }
}
