import { Component, OnInit } from '@angular/core';
import { TICKET, Ticket } from '../../interfaces/ticket';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking.html',
  styleUrls: ['./booking.css'],
})
export class Booking implements OnInit {
  TicketsList: Ticket[] = [];
  ngOnInit(): void {
    this.TicketsList = TICKET;
    console.log(this.TicketsList);
  }
}
