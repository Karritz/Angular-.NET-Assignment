import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataSource } from 'devextreme/common/data';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  getRandomData() {
    return this.httpClient.get("https://localhost:7076/RandomData")
  }

  getDataSource() {
    return new DataSource({
      store: {
        type: 'odata',
        version: 2,
        url: 'https://js.devexpress.com/Demos/SalesViewer/odata/DaySaleDtoes',
        key: 'Id',
        beforeSend(request) {
          const year = new Date().getFullYear() - 1;
          request.params.startDate = `${year}-05-10`;
          request.params.endDate = `${year}-5-15`;
        },
      },
    });
  }
}
