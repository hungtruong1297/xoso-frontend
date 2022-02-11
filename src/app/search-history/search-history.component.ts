import { SearchHistoryService } from './search-history.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { of } from 'rxjs';

export interface SearchHistory {
  id: number;
  userMail: string;
  date: string;
  provinceName: string;
  searchValue: string;
  checked?: boolean;
}

const DATA_SOURCE: SearchHistory[] = [
  {

    "id": 14,
    "userMail": "0012Postman@postman.com",
    "date": "2021-11-27T17:00:00.000+00:00",
    "provinceName": "Hậu Giang",
    "searchValue": "508867"
  },
  {
    "id": 15,
    "userMail": "0012Postman@postman.com",
    "date": "2021-11-28T17:00:00.000+00:00",
    "provinceName": "Đăk Lăk",
    "searchValue": "327143"
  },
  {
    "id": 16,
    "userMail": "0012Postman@postman.com",
    "date": "2021-11-28T17:00:00.000+00:00",
    "provinceName": "Long An",
    "searchValue": "444718"
  },
  {
    "id": 17,
    "userMail": "0012Postman@postman.com",
    "date": "2021-11-28T17:00:00.000+00:00",
    "provinceName": "Kiên Giang",
    "searchValue": "393654"
  },
  {
    "id": 18,
    "userMail": "0012Postman@postman.com",
    "date": "2021-11-28T17:00:00.000+00:00",
    "provinceName": "Vĩnh Long",
    "searchValue": "982056"
  },
  {
    "id": 14,
    "userMail": "0012Postman@postman.com",
    "date": "2021-11-27T17:00:00.000+00:00",
    "provinceName": "Hậu Giang",
    "searchValue": "508867"
  },
  {
    "id": 15,
    "userMail": "0012Postman@postman.com",
    "date": "2021-11-28T17:00:00.000+00:00",
    "provinceName": "Đăk Lăk",
    "searchValue": "327143"
  },
  {
    "id": 16,
    "userMail": "0012Postman@postman.com",
    "date": "2021-11-28T17:00:00.000+00:00",
    "provinceName": "Long An",
    "searchValue": "444718"
  },
  {
    "id": 17,
    "userMail": "0012Postman@postman.com",
    "date": "2021-11-28T17:00:00.000+00:00",
    "provinceName": "Kiên Giang",
    "searchValue": "393654"
  },
  {
    "id": 18,
    "userMail": "0012Postman@postman.com",
    "date": "2021-11-28T17:00:00.000+00:00",
    "provinceName": "Vĩnh Long",
    "searchValue": "982056"
  }
];

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.css']
})
export class SearchHistoryComponent implements OnInit {
  msg: string = '';
  clss: string = '';
  searchHistories: SearchHistory[] = [];

  constructor(private searchHistoryService: SearchHistoryService) { }

  ngOnInit() {
    this.getSearchHistoryService();
  }

  getSearchHistoryService(): void {
    // this.searchHistories = DATA_SOURCE;
    this.searchHistoryService.getSearchHistories().subscribe(searchHistories => this.searchHistories = searchHistories);
  }

  checkAllCheckBox(ev: any) {
    this.searchHistories.forEach(x => x.checked = ev.target.checked)
  }

  isAllCheckBoxChecked() {
    return this.searchHistories.every(s => s.checked);
  }

  deleteSearchHistories(): void {
    const selectedSearchHistory = this.searchHistories.filter(searchHistory => searchHistory.checked).map(s => s.id);
    console.log(selectedSearchHistory);

    if (selectedSearchHistory && selectedSearchHistory.length > 0) {
      this.searchHistoryService.deleteSearchHistories(selectedSearchHistory as number[])
        .subscribe(res => {
          this.clss = 'grn';
          this.msg = 'Xoá thành công.';
        }, err => {
          this.clss = 'rd';
          this.msg = 'Đã có lỗi xảy ra khi xoá.';
        }
        );
    } else {
      this.clss = 'rd';
      this.msg = 'Phải chọn ít nhất một dòng.';
    }
  }

}






