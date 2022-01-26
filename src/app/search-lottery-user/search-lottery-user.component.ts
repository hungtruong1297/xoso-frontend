import { Province } from './../province';
import { Result } from './../result';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm, FormControl, FormArray } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';


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

  constructor(private http: HttpClient) {
  }

  submit(f: FormGroup) {
    // console.log(f);
    // let date = f.value.date;
    // let provinceId = f.value.id;

    // this.updatedURL = this._urlResult + "/" + date + "/" + provinceId;
    // this.http.get(this.updatedURL)
    //   .subscribe(response => this.results = response);
    console.log(this.searchLotteryForm.value);

    // console.log(this.results[0]);
  }

  ngOnInit(): void {
    this.getProvinces();
    this.getRoles();
    this.searchLotteryForm = new FormGroup({
      'date': new FormControl(null),
      'provinceId': new FormControl(null),
      'value': new FormControl(null),
      'roles': new FormArray([])
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

  getRoles() {
    this.roles = [{
      "id": 1,
      "name": "ADMIN"
    },
    {
      "id": 2,
      "name": "USER"
    }
    ]
  }








}
