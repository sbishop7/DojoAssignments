import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  constructor() { }
    board: Array<String> = [
      "OFF",
      "OFF",
      "OFF",
      "OFF",
      "OFF",
      "OFF",
      "OFF",
      "OFF",
      "OFF",
      "OFF"
    ]

  switch(idx) {
      console.log("Switching", idx);
      if(this.board[idx]==="OFF"){
        this.board[idx] = "ON";
      }else{
        this.board[idx] = "OFF";
      }
  }
  ngOnInit() {
  }

}
