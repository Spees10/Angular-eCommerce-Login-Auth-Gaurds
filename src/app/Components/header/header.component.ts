import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isUserLogged: boolean;
  constructor(private authService: UserAuthService) {
    this.isUserLogged = this.authService.isUserLogged;
  }

  ngOnInit(): void {
    // this.isUserLogged = this.authService.isUserLogged;
    this.authService.getLoggedStatus().subscribe(status => {
      this.isUserLogged = status
    })
  }

}
