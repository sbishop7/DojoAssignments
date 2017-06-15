import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  accounts: Array<any> = [];
  user = {firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPW: "",
        address: "",
        unit: "",
        city: "",
        state: "",
        lucky: ""
      }
  message: string = ""
  
  states: Array<string> = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']

  // let myObj: { name: string} = { name: "Bill"};

  onSubmit(){
    console.log("Submitting");
    console.log(this.user);
    this.accounts.push(this.user);
    this.user = {firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPW: "",
        address: "",
        unit: "",
        city: "",
        state: "",
        lucky: ""
      }
  }

  constructor() { }



  ngOnInit() {
  }

}
