import { Component, OnInit } from '@angular/core';
import { Province } from './../province';
import { Result } from './../result';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-lottery',
  templateUrl: './create-lottery.component.html',
  styleUrls: ['./create-lottery.component.css']
})



export class CreateLotteryComponent implements OnInit {

  // http;

  _urlResult = "http://localhost:8080/api/results";
  _urlProvince = "http://localhost:8080/api/provinces";
  updatedURL: string | undefined;

  provinces: any;
  winnings: any;
  results: any;

  // dateInput = "";
  // provinceInput = "Dak Lak";
  // provinceCode = "17";

  selectedDate: any;
  selectedProvince = new Province(-1, "Empty");

  constructor(private http: HttpClient) {
    this.getProvinces();
    this.getWinnings();
  }

  submit(f: NgForm) {
    console.log(f.form.value);

    // let date = f.value.date;
    // let provinceId = f.value.id;

    // this.updatedURL = this._urlResult + "/" + date + "/" + provinceId;
    // this.http.get(this.updatedURL).subscribe(response => this.results = response);
    this.http.post(this._urlResult, f.form.value).subscribe(response => console.log(response));
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

  getWinnings() {
    // Get data from Server
    this.http.get(this._urlResult + "/winnings").subscribe(response => this.winnings = response)
  }

  create(result: Result) {

  }




  ngOnInit(): void {
  }


}
