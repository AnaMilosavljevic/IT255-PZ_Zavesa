import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../services/rezervacija.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-moje-rezervacije',
  templateUrl: './moje-rezervacije.component.html',
  styleUrls: ['./moje-rezervacije.component.scss']
})
export class MojeRezervacijeComponent implements OnInit {
  user: any;
  reservations: any[] = [];

  constructor(private reservationService: ReservationService, private userService: UserService) {}

  ngOnInit(): void {
    this.user = this.userService.getCurrentUser();
    if (this.user) {
      this.loadReservations(this.user.id);
    }
  }

  loadReservations(userId: number): void {
    this.reservationService.getReservationsForUser(userId).subscribe(reservations => {
      this.reservations = reservations;
    });
  }
}
