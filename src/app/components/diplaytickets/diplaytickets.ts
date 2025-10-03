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
  TotalList: BusDetails[] = [];
  currentList: BusDetails[] = [];
  constructor() {}
  ngOnInit(): void {
    this.TotalList = BUS_DETAILS;
    console.log(this.TotalList);
    console.log('In Child:', this.userdata);
    this.Search();
  }

  Search() {
    
    this.currentList = this.TotalList.filter((ticket) => ticket.src === this.userdata.source);
    console.log('Chennai TKSTS:', this.currentList);
  }
}
