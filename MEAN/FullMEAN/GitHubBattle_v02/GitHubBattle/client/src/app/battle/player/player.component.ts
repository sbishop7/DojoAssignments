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
    console.log(this.player)
    console.log("Selected player... " + this.selectedPlayer)
  }

  onSubmit(){
  console.log("Submitting");
  console.log(this.username);
  this.userExists = false;
  this._GithubApiService.retrieveGithubUser(this.username)
      .catch( err => {
        this.userExists = false;
        console.log( "Error with GitHub retrieval");
      })
      .then( data => {
        console.log("In Then");
        this.selectedPlayer.username = data.login;
        this.selectedPlayer.score = (data.public_repos + data.followers) * 12;
        this.selectedPlayer.avatar_url = data.avatar_url;
        this.playerStats.emit(this.selectedPlayer)

      })
    console.log(this.selectedPlayer)
    // // console.log("what's up " + this.promise);
    // if (this.promise) {
    //     console.log(this.promise)
    //     this.playerStats.emit(this.promise)
    //   this.promise.then( (user) => {
    //     if (user.id) {
    //       this.userExists = true;
    //       this.score = user.public_repos + user.followers;
    //     } else {
    //       this.userExists = false;
    //       this.score = null;
    //     }
    //     this.username = null;
    //   })
    //   .catch( (err) => {
    //     this.userExists = false;
    //   });
    // } else {
    //   this.userExists = false;
    //   console.log("userExists = false")
    // }
  }
}
