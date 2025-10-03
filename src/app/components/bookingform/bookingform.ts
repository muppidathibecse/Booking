import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bookingform',
  imports: [],
  templateUrl: './bookingform.html',
  styleUrl: './bookingform.css',
})
export class Bookingform {
  constructor(private router: Router) {}
  GoBack() {
    this.router.navigate(['/tickets']);
  }
}
