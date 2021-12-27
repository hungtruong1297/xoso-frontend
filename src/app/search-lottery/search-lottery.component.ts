import { Province } from './../province';
import { Result } from './../result';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-lottery',
  templateUrl: './search-lottery.component.html',
  styleUrls: ['./search-lottery.component.css']
})
export class SearchLotteryComponent implements OnInit {
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
    this.http.get(this.updatedURL).subscribe(response => this.results = response);
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

  update(result: Result, newResult: HTMLInputElement) {
    result.result = newResult.value;
    // console.log(newResult);
    this.http.put(this._urlResult + "/" + result.id, result).subscribe(response => { console.log(response) })
    newResult.value = "";
  }

  create(newResult: HTMLInputElement) {
    // this.http.post(this._urlResult, result).subscribe(response => {console.log(response)})
  }




  ngOnInit(): void {
  }

}
