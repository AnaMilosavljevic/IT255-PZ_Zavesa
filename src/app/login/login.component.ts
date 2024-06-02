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
    this.userService.getUser(this.username, this.password).subscribe(users => {
      if (users.length > 0) {
        alert('Uspešna prijava na sistem');
        this.router.navigate(['/home']);
      } else {
        alert('Pogrešno korisničko ime ili lozinka');
      }
    });
  }
}
