import { Component, OnInit } from '@angular/core';

import { Note } from './notes';

import {NotesService } from './notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  all_notes: Array<Note> = []

  constructor(private _notesService: NotesService) { }

  ngOnInit() {
    this._notesService.get_notes()
      .then((notes) => this.all_notes = notes)
  }

  addNote(newNote: Note){
    // this.rats_service.create_rat(new_rat)
    //   .then(() => { this.get_all_rats() } )
    //   .catch(err => console.log("There's an error?", err))
    this._notesService.addNote(newNote)
      .then(() => { this.get_notes() } )
      .catch(err => console.log("There's an error...", err))


  }
}
