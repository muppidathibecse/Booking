import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { Check } from './components/check/check';

export const routes: Routes = [
  { path: '', component: Home }, // Initial route → Home
  { path: 'home', component: Home },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  // { path: 'check/:username', component: Check }
  { path: 'check', component: Check },
];
