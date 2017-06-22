import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Player } from './../battle/player';
import { PlayerService } from './../battle/player.service'

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css']
})
export class RankingsComponent implements OnInit, OnDestroy {
  all_players: Array<Player>
  // subscription: Subscription;

  constructor(
    private _PlayerService: PlayerService
  ) {
   }

  ngOnInit() {
    this.get_all_players();
  }

  get_all_players(){
    this._PlayerService.all_players()
        .catch( err => { console.log( "Error retrieving all players", err); })
        .then( data => {
          this.all_players = data;
        })
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

}
