import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  oddNumbers = [];
  evenNumbers = [];

  constructor() {
  }

  ngOnInit() {
  }

  onIntervalFired(lastNumber: number) {
    if (lastNumber % 2) {
      this.oddNumbers.push(lastNumber);
    } else {
      this.evenNumbers.push(lastNumber);
    }
    console.log(lastNumber);
  }
}
