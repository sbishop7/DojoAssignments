import { Component, OnInit, Input,  } from '@angular/core';
import { Player } from './player';
import { GithubApiService } from './../github-api.service';
import { Player1Service } from './../player1.service';
import { Player2Service } from './../player2.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {
  player1: Player = new Player();
  player2: Player = new Player();
  // all_players: Array<Player>;
  readyPlayer1 = false;
  readyPlayer2 = false;
  p1 = "Player 1"
  p2 = "Player 2"

  constructor(
    private _GithubApiService: GithubApiService,
    private _Player1Service: Player2Service,
    private _Player2Service: Player2Service
    ) {
     }

  ngOnInit() {
  }

  player1Stats(playerData){
    this.player1 = {
      username: playerData.username,
      score: ( ( playerData.public_repos + playerData.followers) * 12 ),
      avatar_url: playerData.avatar_url
    }
    this.readyPlayer1 = true;
  }

  player2Stats(playerData){
    this.player2 = {
      username: playerData.username,
      score: ( ( playerData.public_repos + playerData.followers) * 12 ),
      avatar_url: playerData.avatar_url
    }
    this.readyPlayer2 = true;
  }

}
