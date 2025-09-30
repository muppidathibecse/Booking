import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private router: Router) {}

  Login() {
    this.router.navigate(['/login']);
  }
  Register() {
    this.router.navigate(['/register']);
  }
}
