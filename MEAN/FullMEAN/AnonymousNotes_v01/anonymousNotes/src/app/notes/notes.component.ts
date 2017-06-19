import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes: Array<any> = [];
  note = {text: ""
  }, { timestamps: true });

  constructor() { }

  ngOnInit() {
  }

};
