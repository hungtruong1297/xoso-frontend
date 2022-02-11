import { AuthService } from './../auth.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form !: FormGroup;
  isError!: boolean;
  message!: String;

  ngOnInit(): void {
    this.form = new FormGroup(
      {
        mail: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', Validators.required)
      }
    )
  }


  resultAuth: any;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  login() {
    // console.log(this.form.getRawValue());
    this.http
      .post("http://localhost:8080/api/login", this.form.getRawValue())
      .subscribe(
        {
          next: (response) => {
            this.resultAuth = response;
            localStorage.setItem('id_token', this.resultAuth.token); // save Token to localStorage
            localStorage.setItem('username', this.resultAuth.username); // save Username to localStorage
            localStorage.setItem('role_name', this.resultAuth.role);
          },
          error: (e) => console.error(e),
          complete: () => {
            AuthService.isLoggedIn = true;
            alert('Success.');
            this.router.navigate(['']);
          }
        }
      )

  }

  get mail() {
    return this.form.get('mail');
  }

  get password() {
    return this.form.get('password');
  }

}
