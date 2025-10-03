import { Component, Input, OnInit } from '@angular/core';
import { BUS_DETAILS, BusDetails } from '../../interfaces/busdetails';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-diplaytickets',
  imports: [CommonModule],
  templateUrl: './diplaytickets.html',
  styleUrl: './diplaytickets.css',
})
export class Diplaytickets implements OnInit {
  @Input() userdata!: {
    source: string;
    destination: string;
    date: string;
  };
  LoadingStatus = '';
  TotalList: BusDetails[] = [];
  currentList: BusDetails[] = [];
  constructor() {}
  ngOnInit(): void {
    this.LoadingStatus = 'Loading..';
    this.TotalList = BUS_DETAILS;
    console.log(this.TotalList);
    console.log('In Child:', this.userdata);
    setTimeout(() => {
      this.Search();
      this.LoadingStatus = ''; // hide loading
    }, 2000); // 2000ms = 2 seconds
  }

  Search() {
    this.currentList = this.TotalList.filter((ticket) => ticket.src === this.userdata.source);
    console.log('Chennai TKSTS:', this.currentList);
  }
}
