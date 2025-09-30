import { Component } from '@angular/core';
import { UserService } from '../../services/userservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check',
  standalone: true,
  imports: [],
  templateUrl: './check.html',
  styleUrls: ['./check.css'],
})
export class Check {
  constructor(private router: Router, public userService: UserService) {}
  Logout() {
    this.router.navigate(['/home']);
  }
}
