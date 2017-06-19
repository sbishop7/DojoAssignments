import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Note } from './../notes'

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
  newNote: Note = new Note
  @Output() addNoteEvent = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  addNote() {
    this.addNoteEvent.emit(this.newNote)
    this.newNote = new Note
  }
}
