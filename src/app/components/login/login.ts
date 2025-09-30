import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { USER_LIST, Users } from '../../interfaces/users';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../../services/userservice';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule, CommonModule],
  standalone: true,
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login implements OnInit {
  constructor(private router: Router, private userService: UserService) {}

  currname: string = '';
  currpassword: string = '';
  userlist: Users[] = [];
  ngOnInit(): void {
    this.userlist = USER_LIST;
    console.log(this.userlist);
  }

  Login() {
    const found = this.userlist.find(
      (key) => key.username === this.currname && key.password === this.currpassword
    );

    if (found) {
      alert('Login Successful!');
      // this.router.navigate(['/check', found.username]);
      this.userService.username.set(found.username); // save username
      this.router.navigate(['/check']); // navigate to Check page
    } else {
      alert('User not found or wrong password!');
    }
  }
}
