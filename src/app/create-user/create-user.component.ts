import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  rolesList: any;

  _urlUser = "http://localhost:8080/api/users"
  _urlAddUser = "http://localhost:8080/admin/add"

  isError: boolean = false;
  errorMessage: any;

  createUserForm!: FormGroup;

  onSubmit(authForm: NgForm) {
    this.isError = false;
    console.log({ ...authForm.value, roles: [authForm.value.roles] });
    this.http
      .post(this._urlAddUser, { ...authForm.value, roles: [authForm.value.role] })
      .subscribe(
        response => {
          alert('User added.');
          authForm.reset();
          this.router.navigate(['manage-user']);
        },
        error => {
          this.isError = true;
          this.errorMessage = error.error;
          console.log(error.error);
        }
      )
  }

  constructor(private http: HttpClient, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getRolesList();
  }

  getRolesList() {
    this.rolesList = [
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
