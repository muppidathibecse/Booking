// import { Routes } from '@angular/router';
// import { Home } from './components/home/home';
// import { Login } from './components/login/login';
// import { Register } from './components/register/register';
// import { Navbar } from './components/navbar/navbar';
// import { Tickets } from './components/tickets/tickets';
// import { Booking } from './components/booking/booking';
// import { Account } from './components/account/account';

// export const routes: Routes = [
//   { path: '', component: Home }, // Initial route → Home
//   { path: 'home', component: Home },
//   { path: 'login', component: Login },
//   { path: 'register', component: Register },
//   // { path: 'check/:username', component: Check }
//   { path: 'navbar', component: Navbar },
//   { path: 'tickets', component: Tickets },
//   { path: 'bookings', component: Booking },
//   { path: 'account', component: Account },
// ];
import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { Navbar } from './components/navbar/navbar';
import { Tickets } from './components/tickets/tickets';
import { Booking } from './components/booking/booking';
import { Account } from './components/account/account';
import { Bookingform } from './components/bookingform/bookingform';

export const routes: Routes = [
  // Public routes (no navbar)
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'login', component: Login },
  { path: 'register', component: Register },

  // Protected routes (with navbar)
  {
    path: '',
    component: Navbar, // navbar only here
    children: [
      { path: 'tickets', component: Tickets },
      { path: 'bookings', component: Booking },
      { path: 'account', component: Account },
      { path: 'bookingform', component: Bookingform },
    ],
  },

  // fallback
  { path: '**', redirectTo: '' },
];
