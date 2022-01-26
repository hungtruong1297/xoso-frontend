import { SearchHistory } from './search-history.component';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchHistoryService {

  private searchHistoryUrl = 'http://localhost:8080/api/searchHistory';  // URL to REST API

  constructor(private http: HttpClient) { }

  /** GET searchHistories from the server */
  getSearchHistories(): Observable<SearchHistory[]> {
    return this.http.get<SearchHistory[]>(this.searchHistoryUrl + '/' + localStorage.getItem('username'));
  }

  /** DELETE: delete the product from the server */
  deleteSearchHistories(ids: number[]) {
    if (confirm("Are you sure to delete?")) {

      //origin
      // const data = { 'ids': ids };
      // and in Post that contains 'data' instead of ids
      const url = `${this.searchHistoryUrl}/delete`;

      // origin
      // const options = {
      //   headers: new HttpHeaders({
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json'
      //   }),
      //   responseType: 'text' as 'json'
      // };
      // const resp = this.http.post<any>(url, data, options)

      const resp = this.http.post<any>(url, ids);//.map(resp => {return resp;}).catch(err => {console.log(err);});

      //console.log('resp: ' + resp);

      return resp;
    }

    return of({});
  }
}
