import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  resultAuth: any;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      mail: '',
      password: ''
    })
  }

  login() {
    this.http
      .post("http://localhost:8080/api/login", this.form.getRawValue())
      .subscribe(response => {
        this.resultAuth = response;
        localStorage.setItem('id_token', this.resultAuth.token); // save Token to localStorage
        localStorage.setItem('username', this.resultAuth.username); // save Mail to localStorage
        this.router.navigate(['/manage-user']);
      })
  }
}
