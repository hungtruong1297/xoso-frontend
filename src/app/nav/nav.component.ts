import { AuthService } from './../auth.service';
import { Emitters } from './../emitters/emitters';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  authenticated: boolean = AuthService.isLoggedIn;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    // Source: https://www.youtube.com/watch?v=brb4SO-dO_k&t=1561s&ab_channel=ScalableScripts
    // Emitters.authEmitter.subscribe(
    //   (auth: boolean) => {
    //     this.authenticated = auth;
    //   }
    // )
    this.authenticated = !!this.authService.IsLoggedIn();
  }

  logout() {
    this.authenticated = false;
    localStorage.removeItem('id_token');
    localStorage.removeItem('username');
    localStorage.removeItem('role_name');
    AuthService.isLoggedIn = false;
    this.router.navigate(['']);
  }

}
