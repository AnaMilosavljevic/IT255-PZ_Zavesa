import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.currentUser.subscribe(user => {
      this.isLoggedIn = !!user;
    });
  }

  logout() {
    this.userService.logout();
  }

  
  }

