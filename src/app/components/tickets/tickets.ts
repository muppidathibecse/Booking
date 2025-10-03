import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Diplaytickets } from '../diplaytickets/diplaytickets';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [CommonModule, Diplaytickets, FormsModule],
  templateUrl: './tickets.html',
  styleUrl: './tickets.css',
})
export class Tickets {
  current: {
    source: string;
    destination: string;
    date: string;
  };
  Show = false;
  constructor() {
    this.current = {
      source: '',
      destination: '',
      date: '',
    };
  }

  Search() {
    console.log(this.current);

    this.Show = true;
  }
  Clear() {
    this.current = {
      source: '',
      destination: '',
      date: '',
    };
    this.Show = false;
  }
}
