import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UserService } from '../../services/userservice';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  standalone: true,
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class Navbar {
  constructor(private router: Router, public userService: UserService) {}
  Logout() {
    this.router.navigate(['/home']);
  }
}
