import { Component, OnInit } from '@angular/core';
import { RepertoarService } from '../services/repertoar.service';
import { ReservationService } from '../services/rezervacija.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repertoar',
  templateUrl: './repertoar.component.html',
  styleUrls: ['./repertoar.component.scss']
})
export class RepertoarComponent implements OnInit {
  shows: any[] = [];
  user: any;

  constructor(
    private repertoarService: RepertoarService,
    private reservationService: ReservationService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = this.userService.getCurrentUser();
    if (!this.user) {
      this.router.navigate(['/login']);
    } else {
      this.repertoarService.getShows().subscribe(shows => {
        this.shows = shows;
      });
    }
  }

  reserveTicket(showId: number): void {
    if (!this.user) {
      alert('Morate biti prijavljeni da biste rezervisali kartu.');
      return;
    }

    const reservation = {
      showId: showId,
      userId: this.user.id,
      showTitle: this.shows.find(show => show.id === showId)?.title,
      date: this.shows.find(show => show.id === showId)?.date,
    };

    this.reservationService.addReservation(reservation).subscribe(() => {
      alert('Karta je uspešno rezervisana');
    });
  }
}
