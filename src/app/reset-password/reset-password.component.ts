import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {


  form: FormGroup = new FormGroup({});
  messageResponse: any;
  errorResponse: any;
  resultAuth: any;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      mail: ''
    })
  }

  resetPassword() {
    this.http
      .post("http://localhost:8080/api/forgot", this.form.getRawValue())
      .subscribe(
        {
          next: (response) => {
            this.messageResponse = response;
            alert(this.messageResponse.message);
          }
          ,
          error: (error) => {
            this.errorResponse = error;
            alert(this.errorResponse.error.message);
          },
        }
      )
  }


}
