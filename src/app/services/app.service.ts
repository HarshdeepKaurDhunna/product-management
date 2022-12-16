import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private httpClient: HttpClient) { }
  URL = 'https://random-data-api.com/api/coffee/random_coffee?size=50';

  /**
   * Generic Get Method
   * @param apiUrl - Api URL 
   */
  getData() {
    return this.httpClient.get<any>(this.URL)
  }
  getStoreData() {
    return this.httpClient.get<any>(this.URL).pipe(
      map((data) => {
        return data.map((item: any) => ({...item}))
      }),
    );
  }
}
