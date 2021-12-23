import { Province } from './../province';
import { Result } from './../result';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-lottery',
  templateUrl: './search-lottery.component.html',
  styleUrls: ['./search-lottery.component.css']
})
export class SearchLotteryComponent implements OnInit {
  // http;

  _urlResult = "http://localhost:8080/api/results/";
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

  onSubmit(dateInput: HTMLInputElement, selectedProvince: Province) {
    // Reset result
    this.results = undefined;

    let date = dateInput.value;
    let province = selectedProvince.id;
    this.updatedURL = this._urlResult + date + "/" + province;
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


  ngOnInit(): void {
  }

}
