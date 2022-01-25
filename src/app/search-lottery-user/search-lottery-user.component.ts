import { Province } from './../province';
import { Result } from './../result';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  // dateInput = "";
  // provinceInput = "Dak Lak";
  // provinceCode = "17";

  selectedDate: any;
  selectedProvince = new Province(-1, "Empty");

  constructor(private http: HttpClient) {
    this.getProvinces();
  }

  submit(f: NgForm) {
    console.log(f);
    let date = f.value.date;
    let provinceId = f.value.id;

    this.updatedURL = this._urlResult + "/" + date + "/" + provinceId;
    this.http.get(this.updatedURL)
      .subscribe(response => this.results = response);

    // console.log(this.results[0]);
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






  ngOnInit(): void {
  }

}
