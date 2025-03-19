import { Component, OnInit } from '@angular/core';

interface Data {
  name: string,
  region: string,
  currency: string,
  country: string,
  numberrange: number,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'AngularApp Client with .NET';
  isLoggedIn: boolean = false;

  constructor() { }

  ngOnInit() {

  }

  login($event: boolean) {
    this.isLoggedIn = $event;
  }


}
