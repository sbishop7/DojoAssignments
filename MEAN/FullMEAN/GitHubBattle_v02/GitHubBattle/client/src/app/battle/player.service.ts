import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs';

@Injectable()
export class PlayerService {

  constructor(
    private _http: Http
  ) { }

  create(player){
    return this._http.post('/add', player)
      .map( data => data.json() )
      .toPromise();
  }

  all_players() {
    return this._http.get( '/players' )
      .map( data => data.json() )
      .toPromise();
  }

}
