import { User } from './../user';
import { Province } from './../province';
import { Result } from './../result';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm, FormControl, FormArray } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-search-lottery-user',
  templateUrl: './search-lottery-user.component.html',
  styleUrls: ['./search-lottery-user.component.css']
})
export class SearchLotteryUserComponent implements OnInit {
  // http;

  _urlResult = "http://localhost:8080/api/results";
  _urlProvince = "http://localhost:8080/api/provinces";
  updatedURL: string | undefined;

  provinces: any;
  results: any;
  roles: any;

  searchLotteryForm!: FormGroup;

  selectedDate: any;
  selectedProvince = new Province(-1, "Empty");

  constructor(private http: HttpClient, public datepipe: DatePipe) {
  }

  submit(f: FormGroup) {
    console.log(this.searchLotteryForm.value);
    this.http.post("http://localhost:8080/api/searchHistory/add", this.searchLotteryForm.value)
      .subscribe({
        next: (v: any) => alert(v.message),
        error: (e) => console.error(e),
        complete: () => {
          console.info('complete');
          this.getResults(f);
        }
      });

    // console.log(this.results[0]);
  }
  getResults(f: FormGroup) {
    let date = f.value.date;
    let provinceId = f.value.provinceId;

    let dateStr = this.datepipe.transform(date, 'dd-MM-yyyy');
    this.updatedURL = this._urlResult + "/" + dateStr + "/" + provinceId;
    // console.log(this.updatedURL)
    this.http.get(this.updatedURL)
      .subscribe({
        next: (response) => this.results = response,
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
  }

  ngOnInit(): void {
    this.getProvinces();
    this.searchLotteryForm = new FormGroup({
      'userMail': new FormControl(localStorage.getItem('username')),
      'provinceId': new FormControl(null),
      'searchValue': new FormControl(null),
      'date': new FormControl(null)
    });
  }



  getProvinces() {
    // Get data from Server
    // this.http.get(this._urlProvince).subscribe(response => this.provinces = response);

    // Sample Data:
    this.provinces = [
      {
        "id": 1,
        "name": "Xổ số Miền Bắc"
      },
      {
        "id": 2,
        "name": "TP. HCM"
      },
      {
        "id": 3,
        "name": "An Giang"
      },
      {
        "id": 4,
        "name": "Bình Dương"
      }]
  }

  get date() {
    return this.searchLotteryForm.get('date');
  }

  get searchValue() {
    return this.searchLotteryForm.get('searchValue');
  }










}
