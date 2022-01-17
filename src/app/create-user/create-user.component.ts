import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  roles: any;
  _urlUser = "http://localhost:8080/api/users"
  _urlAddUser = "http://localhost:8080/admin/add"

  isLoginMode = true;
  isError: boolean = false;
  errorMessage: any;

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(authForm: NgForm) {
    this.isError = false;
    this.http
      .post(this._urlAddUser, authForm.value)
      .subscribe(
        response => {
          console.log(response);
        },
        errorMessage => {
          this.isError = true;
          this.errorMessage = errorMessage.error;
        }
      )
    authForm.reset();
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getRoles();
  }

  getRoles() {
    this.roles = [
      {
        "roleId": 1,
        "roleName": "ADMIN"
      },
      {
        "roleId": 2,
        "roleName": "USER"
      }
    ]
  }



}
