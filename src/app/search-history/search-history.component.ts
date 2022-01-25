import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface SearchHistory {
  id: number;
  userMail: string;
  date: string;
  provinceName: string;
  searchValue: string;
}

const SEARCH_HISTORY_DATA: SearchHistory[] = [
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

  displayedColumns: string[] = ['id', 'userMail', 'date', 'province', 'searchValue', 'deleteAction'];

  // dataSource!: MatTableDataSource<any>;
  dataSource = new MatTableDataSource(SEARCH_HISTORY_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  delete(element: SearchHistory) {
    console.log(element);
  }


  constructor() { }

  ngOnInit(): void {
    // dataSource = SEARCH_HISTORY_DATA;
    // this.dataSource = new MatTableDataSource(SEARCH_HISTORY_DATA);
    // console.log(SEARCH_HISTORY_DATA);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    console.log(this.dataSource.paginator);
  }

}






