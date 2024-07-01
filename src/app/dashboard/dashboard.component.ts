import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {ReservationService} from '../services/rezervacija.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user: any;
  reservations: any[] = [];

  constructor(private userService: UserService, private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.user = this.userService.getCurrentUser();
  }
  
}
