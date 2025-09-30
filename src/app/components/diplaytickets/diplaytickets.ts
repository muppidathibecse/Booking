import { Component, OnInit } from '@angular/core';
import { BUS_DETAILS, BusDetails } from '../../interfaces/busdetails';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-diplaytickets',
  imports: [CommonModule],
  templateUrl: './diplaytickets.html',
  styleUrl: './diplaytickets.css',
})
export class Diplaytickets implements OnInit {
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
