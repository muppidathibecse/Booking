export interface BusDetails {
  busname: string;
  type: string;
  stime: string;
  rtime: string;
  duration: string;
  src: string;
  des: string;
  oldrs: number;
  rs: number;
  available: number;
  ratings: number;
}

export const BUS_DETAILS: BusDetails[] = [
  {
    busname: 'Royal Travels',
    type: 'Non A/C Sleeper / Seater',
    stime: '19:45',
    rtime: '05:21',
    duration: '11hr 21min',
    src: 'Bangalore',
    des: 'Mumbai',
    oldrs: 2200,
    rs: 800,
    available: 12,
    ratings: 4.3,
  },
  {
    busname: 'A1 Travels',
    type: 'A/C Sleeper / Seater',
    stime: '07:45',
    rtime: '10:21',
    duration: '3hr 21min',
    src: 'Bangalore',
    des: 'Mumbai',
    oldrs: 1900,
    rs: 1100,
    available: 7,
    ratings: 2.3,
  },
];
