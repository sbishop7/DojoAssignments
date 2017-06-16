import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-supersaiyan3',
  templateUrl: './supersaiyan3.component.html',
  styleUrls: ['./supersaiyan3.component.css']
})
export class Supersaiyan3Component implements OnInit {
  @Input() powerLevel;
  @Input() quotes;
  message: string = "";

  constructor() { }
  

  ngOnInit() {
  }

  ngOnChanges() {
    if( this.powerLevel == 50000 ){
      this.message = this.quotes[2];
    }
    else if (this.powerLevel > 20000 ){
      this.message = this.quotes[1];
    }
    else if (this.powerLevel > 9000 ){
      this.message = this.quotes[0];
    }
    else{
      this.message = "";
    }
  }

}
