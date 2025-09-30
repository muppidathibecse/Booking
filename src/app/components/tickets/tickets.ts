import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BUS_DETAILS, BusDetails } from '../../interfaces/busdetails';
import { Diplaytickets } from '../diplaytickets/diplaytickets';

@Component({
  selector: 'app-tickets',
  imports: [CommonModule, Diplaytickets],
  templateUrl: './tickets.html',
  styleUrl: './tickets.css',
})
export class Tickets implements OnInit {
  TotalList: BusDetails[] = [];
  currentList: BusDetails[] = [];
  constructor() {}
  ngOnInit(): void {
    this.TotalList = BUS_DETAILS;
    console.log(this.TotalList);
  }
  Search() {
    this.currentList = this.TotalList;
    console.log('currentList', this.currentList);
  }
}
