import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  emails: any[]
    
  constructor() { }

  ngOnInit() {
    this.emails = [{ email: 'Bill@gates.com',
      importance: true,
      subject: "New Windows",
      content: "Windows XI will launch in year 2100"},
    { email: 'ada@lovelace.com',
      importance: true,
      subject: "Programming",
      content: "Enchantress of Numbers"},
    { email: 'john@carmac.com',
      importance: false,
      subject: "UPdated Algo",
      content: "New algoritym for shadow volumes"},
    { email: 'gabe@newel.com',
      importance: false,
      subject: "HL3!",
      content: "Just kidding..."}]
  }

}
