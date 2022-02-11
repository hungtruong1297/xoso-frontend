import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Emitters } from '../emitters/emitters';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {

  message = '';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('username') == null) {
      Emitters.authEmitter.emit(false);
      this.message = `You're logged out.`
    } else {
      this.message = `Hello ${localStorage.getItem('username')}`;
      Emitters.authEmitter.emit(true);
    }
  }

  navigate() {
    this.router.navigate(['search-lottery-user']);
  }
}
