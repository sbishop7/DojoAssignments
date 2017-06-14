import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'US Time Zone Display';
  rightNow: Date = new Date();
  tzButton: string = "CST";
  switch: boolean = true;
  updateTime(tz, tzString) {
    console.log("Time to update")
    this.rightNow = new Date();
    this.rightNow = new Date(this.rightNow.getTime() + (tz * 60 * 60 * 1000));
    this.tzButton = tzString;
  }
}

