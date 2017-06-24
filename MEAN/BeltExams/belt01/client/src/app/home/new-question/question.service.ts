import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Question } from './question';

import "rxjs"

@Injectable()
export class QuestionService {
  message: String = ""


  constructor( private _http: Http) { }
    add(newQuestion: Question){
      return this._http.post("/add_question", newQuestion).toPromise()
    }

    all_questions(){
      return this._http.get( '/allquestions' )
                .map( data => data.json() )
                .toPromise();
    }
}
