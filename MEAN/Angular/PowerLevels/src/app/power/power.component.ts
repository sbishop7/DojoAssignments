import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {
  powerLevels: Array<number> = [];
  level: number = 1;
  selectedLevel: number = 1;
  levelQuotes: Array<string> = ['"Over 9000!"', '"Superlative!"', '"The One"']

  calculate() {
    this.level = this.selectedLevel;
  }

  constructor() { 
    for( let i = 1; i < 101; i++ ){
      this.powerLevels.push(i);
    }
  }

  ngOnInit() {
  }

}
