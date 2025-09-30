import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { USER_LIST, Users } from '../../interfaces/users';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [RouterLink, FormsModule, CommonModule],
  standalone: true,
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
})
export class Register implements OnInit {
  constructor() {}

  userslist: Users[] = [];
  username: string = '';
  password: string = '';
  confirm: string = '';

  ngOnInit(): void {
    this.userslist = USER_LIST;
    console.log(this.userslist);
  }

  Add() {
    console.log('Add is Called' + this.username + ' : ' + this.password);

    this.userslist.push({
      username: this.username,
      password: this.password,
    });
    console.log(this.userslist);
    this.username = '';
    this.password = '';
    this.confirm = '';
  }
}
