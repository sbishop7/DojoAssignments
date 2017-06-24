import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Score } from './score';

import "rxjs"

@Injectable()
export class ScoreService {
  message: String = ""

  constructor( private _http: Http ) { }
    add(results: Score){
      return this._http.post("/save_score", results).toPromise()
    }

    all_scores(){
      return this._http.get( '/allscores' )
                .map( data => data.json() )
                .toPromise();
    }
    search(){
      return this._http.get('/search')
                .map(data => data.json() )
                .toPromise();
    }
}
