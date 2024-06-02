import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) {}

  register() {
    const newUser = { username: this.username, password: this.password, role: 'user' };
    this.userService.addUser(newUser).subscribe(() => {
      alert('Uspešna registracija!');
      this.router.navigate(['/login']);
    });
  }
}
