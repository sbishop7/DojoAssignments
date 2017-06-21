import { Component, OnInit, Input,  } from '@angular/core';
import { Player } from './player';
import { GithubApiService } from './../github-api.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {
  player1: Player = new Player();
  player2: Player = new Player();
  playerInfo;
  p1 = "Player 1"
  p2 = "Player 2"
  player1Data;

  constructor(private _GithubApiService: GithubApiService) { }

  ngOnInit() {
  }

  player1Stats(playerData){
    console.log("received Player Data... " + playerData);
    this.player1Data = playerData;
    console.log(this.player1Data);
    console.log("avatar is at " + this.player1Data.avatar_url)
    console.log("username is " + this.player1Data.login)
    this.player1 = {
      username: playerData.login,
      score: ( ( playerData.public_repos + playerData.followers) * 12 ),
      avatar_url: playerData.avatar_url
    }
    console.log("Player 1 is ready")
  }
}
