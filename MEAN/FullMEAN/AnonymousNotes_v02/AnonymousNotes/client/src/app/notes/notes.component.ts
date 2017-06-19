import { Component, OnInit } from '@angular/core';

import { Note } from './notes';

import {NotesService } from './notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  all_notes: Array<Note> 

  constructor(private _notesService: NotesService) { }

  ngOnInit() {
    this.get_all_notes();
  }

  get_all_notes(){
    this._notesService.get_notes()
      .then((notes) => {this.all_notes = notes;} );
  }

  addNote(newNote: Note){
    this._notesService.create_note(newNote)
      .then(() => { this.get_all_notes() } )
      .catch(err => console.log("Create Note Error...", err))
  }
}