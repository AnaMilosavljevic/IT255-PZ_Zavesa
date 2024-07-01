import { Component, OnInit } from '@angular/core';
import { RepertoarService } from '../services/repertoar.service';
import { ReservationService } from '../services/rezervacija.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repertoar',
  templateUrl: './repertoar.component.html',
  styleUrls: ['./repertoar.component.scss']
})
export class RepertoarComponent implements OnInit {
  shows: any[] = [];

  constructor(
    private repertoarService: RepertoarService,
    private reservationService: ReservationService
  ) { }

  ngOnInit(): void {
    this.repertoarService.getShows().subscribe(shows => {
      this.shows = shows;
    });
  }

  reserveTicket(showId: number): void {
    const reservation = {
      showId: showId,
      userId: 1 
    };

    this.reservationService.addReservation(reservation).subscribe(() => {
      alert('Karta je uspešno rezervisana');
    });
  }
}
