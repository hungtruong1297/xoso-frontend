import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form!: FormGroup;


  constructor(
    private formBuidler: FormBuilder,
    private http: HttpClient,
    private router: Router // helps navigating to 'login'
  ) { }

  ngOnInit(): void {
    this.form = this.formBuidler.group({
      name: new FormControl('', Validators.required),
      mail: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      phone: ''
    });
  }

  submit() {
    this.http.post('http://localhost:8080/api/register', this.form.getRawValue())
      .subscribe({
        complete: () => {
          alert("OK");
          this.router.navigate(['/login'])
        }, // after submitting, will navigate to /login
        error: (e) => alert(e.error)
      })
  }

  get mail() {
    return this.form.get('mail');
  }
  get name() {
    return this.form.get('name');
  }

  get password() {
    return this.form.get('password');
  }

  get phone() {
    return this.form.get('phone');
  }
}
