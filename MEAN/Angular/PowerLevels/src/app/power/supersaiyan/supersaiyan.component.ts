import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-supersaiyan',
  templateUrl: './supersaiyan.component.html',
  styleUrls: ['./supersaiyan.component.css']
})
export class SupersaiyanComponent implements OnInit {
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
