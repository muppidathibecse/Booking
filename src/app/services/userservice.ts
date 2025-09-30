import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root' // singleton, available across the app
})
export class UserService {
  username = signal(''); // reactive storage for username

  constructor() {}
}
