import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoggedIn = false;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.currentUser.subscribe(user => {
      this.isLoggedIn = !!user;
    });
  }

  navigateHome() {
    if (this.isLoggedIn) {
      this.router.navigate(['/dashboard']);
    } else {
      this.router.navigate(['/']);
    }
  }
}
