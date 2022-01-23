import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup = new FormGroup({});


  constructor(
    private formBuidler: FormBuilder,
    private http: HttpClient,
    private router: Router // helps navigating to 'login'
  ) { }

  ngOnInit(): void {
    this.form = this.formBuidler.group({
      name: '',
      mail: '',
      password: '',
      phone: ''
    });
  }

  submit() {
    this.http.post('http://localhost:8080/api/register', this.form.getRawValue())
      .subscribe({
        complete: () => this.router.navigate(['/login']), // after submitting, will navigate to /login
        error: (e) => alert(e.error)
      })



  }
}
