import { Component, OnInit, Input, OnDestroy  } from '@angular/core';
import { Player } from './player';
import { GithubApiService } from './../github-api.service';
import { Player1Service } from './../player1.service';
import { Player2Service } from './../player2.service';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { PlayerService } from './player.service';


@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {
  player1: Player = new Player();
  player2: Player = new Player();
  readyPlayer1 = false;
  readyPlayer2 = false;
  p1 = "Player 1"
  p2 = "Player 2"

  constructor(
    private _GithubApiService: GithubApiService,
    private _Player1Service: Player1Service,
    private _Player2Service: Player2Service,
    private _PlayerService: PlayerService
    ) {
      this._Player1Service.subject.next(this.player1);
      this._Player2Service.subject.next(this.player2);
     }

  ngOnInit() {
  }

  ngOnDestroy(){
  }

  player1Stats(playerData){
    this.player1 = {
      username: playerData.username,
      score: playerData.score,
      avatar_url: playerData.avatar_url
    }
    this.readyPlayer1 = true;
    this._Player1Service.update( this.player1 );
    this._PlayerService.create( this.player1 )
  }

  player2Stats(playerData){
    this.player2 = {
      username: playerData.username,
      score: playerData.score,
      avatar_url: playerData.avatar_url
    }
    this.readyPlayer2 = true;
    this._Player2Service.update( this.player2 );
    this._PlayerService.create( this.player2 );
  }

}
