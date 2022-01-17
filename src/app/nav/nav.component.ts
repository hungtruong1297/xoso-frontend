import { Emitters } from './../emitters/emitters';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  authenticated = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    // Source: https://www.youtube.com/watch?v=brb4SO-dO_k&t=1561s&ab_channel=ScalableScripts
    Emitters.authEmitter.subscribe(
      (auth: boolean) => {
        this.authenticated = auth;
      }
    )
  }

  logout() {
    this.authenticated = false;
    localStorage.removeItem('id_token');
    localStorage.removeItem('username');
    this.router.navigate(['']);
  }

}
