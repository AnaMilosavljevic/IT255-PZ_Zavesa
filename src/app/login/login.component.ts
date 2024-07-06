import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) {}

  login() {
    this.userService.getUserByUsername(this.username).subscribe(user => {
      if (user && user.password === this.password) {
        this.userService.setCurrentUser(user);
        if (user.role === 'admin') {
          this.router.navigate(['/admin-panel']);
        } else {
          this.router.navigate(['/dashboard']);
        }
      } else {
        alert('Pogrešno korisničko ime ili lozinka');
      }
    });
  }
}
