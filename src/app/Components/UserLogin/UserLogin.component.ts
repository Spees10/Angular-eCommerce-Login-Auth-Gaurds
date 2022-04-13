import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-UserLogin',
  templateUrl: './UserLogin.component.html',
  styleUrls: ['./UserLogin.component.scss']
})
export class UserLoginComponent implements OnInit {
  isUserLogged: boolean = false;
  constructor(private userAuth: UserAuthService) { }

  ngOnInit() {
    this.isUserLogged = this.userAuth.isUserLogged;
  }

  login() {
    this.userAuth.Login('Username', 'Password');
    this.isUserLogged = this.userAuth.isUserLogged;
  }
  logout() {
    this.userAuth.Logout();
    this.isUserLogged = this.userAuth.isUserLogged;
  }

}
