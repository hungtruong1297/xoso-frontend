import { Emitters } from '../emitters/emitters';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    if (localStorage.getItem('username') == null) {
      Emitters.authEmitter.emit(false);
      this.message = `You're logged out.`
    } else {
      this.message = `Hello ${localStorage.getItem('username')}`;
      Emitters.authEmitter.emit(true);
    }

    // this.http.get('http://localhost:8080/api/users')
    //   .subscribe(
    //     (res: any) => {
    //       this.message = `Hello ${localStorage.getItem('username')}`;
    //       Emitters.authEmitter.emit(true);
    //     },
    //     error => {
    //       this.message = `You're not logged in.`
    //       Emitters.authEmitter.emit(false);
    //     }
    //   )
  }

}
