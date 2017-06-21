import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ready-player',
  templateUrl: './ready-player.component.html',
  styleUrls: ['./ready-player.component.css']
})
export class ReadyPlayerComponent implements OnInit {
  @Input() player;

  constructor() { }

  ngOnInit() {
  }

}
