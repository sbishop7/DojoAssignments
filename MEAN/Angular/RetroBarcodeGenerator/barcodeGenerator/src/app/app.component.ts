import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Retro Barcode Generator';
  colorList: Array<string> = [
    'red',
    'blue',
    'DarkSeaGreen',
    'MediumAquaMarine',
    'gray',
    'green',
    'purple',
    'brown',
    'crimson',
    'DarkGoldenRod'
  ]
  colors: Array<string> = [
    this.colorList[ (Math.floor(Math.random()*10)) ], 
    this.colorList[ (Math.floor(Math.random()*10)) ], 
    this.colorList[ (Math.floor(Math.random()*10)) ], 
    this.colorList[ (Math.floor(Math.random()*10)) ], 
    this.colorList[ (Math.floor(Math.random()*10)) ], 
    this.colorList[ (Math.floor(Math.random()*10)) ], 
    this.colorList[ (Math.floor(Math.random()*10)) ], 
    this.colorList[ (Math.floor(Math.random()*10)) ], 
    this.colorList[ (Math.floor(Math.random()*10)) ], 
    ]
}
