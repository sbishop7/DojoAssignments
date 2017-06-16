import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-supersaiyan2',
  templateUrl: './supersaiyan2.component.html',
  styleUrls: ['./supersaiyan2.component.css']
})
export class Supersaiyan2Component implements OnInit {
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

