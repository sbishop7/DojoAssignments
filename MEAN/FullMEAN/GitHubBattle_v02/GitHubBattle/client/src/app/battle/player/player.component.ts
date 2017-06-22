import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GithubApiService } from './../../github-api.service';
import { Player } from '../player';

import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() player;
  username = null;
  userExists = true;
  score = null;
  selectedPlayer = new Player;
  promise;
  

  @Output() playerStats = new EventEmitter();

  constructor(private _GithubApiService: GithubApiService) { }

  ngOnInit() {
  }

  onSubmit(){
  this.userExists = false;
  this._GithubApiService.retrieveGithubUser(this.username)
      .catch( err => {
        this.userExists = false;
        console.log( "Error with GitHub retrieval");
      })
      .then( data => {
        this.selectedPlayer.username = data.login;
        this.selectedPlayer.score = (data.public_repos + data.followers) * 12;
        this.selectedPlayer.avatar_url = data.avatar_url;
        this.playerStats.emit(this.selectedPlayer)
      })
    
  }
}
