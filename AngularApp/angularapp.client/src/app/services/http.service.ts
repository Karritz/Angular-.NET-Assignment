import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  getRandomData() {
    return this.httpClient.get("https://localhost:7076/RandomData")
  }
}
