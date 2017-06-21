import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GithubApiService } from './../../github-api.service';

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
    promise;

  @Output() playerStats = new EventEmitter();

  constructor(private _GithubApiService: GithubApiService) { }

  ngOnInit() {
    console.log(this.player)
  }

  onSubmit(){
  console.log("Submitting");
  console.log(this.username);
  this.userExists = false;
  this.promise = this._GithubApiService.retrieveGithubUser(this.username);
    console.log("post promise")
    // console.log("what's up " + this.promise);
    if (this.promise) {
        console.log(this.promise)
        this.playerStats.emit(this.promise)
      this.promise.then( (user) => {
        if (user.id) {
          this.userExists = true;
          this.score = user.public_repos + user.followers;
        } else {
          this.userExists = false;
          this.score = null;
        }
        this.username = null;
      })
      .catch( (err) => {
        this.userExists = false;
      });
    } else {
      this.userExists = false;
      console.log("userExists = false")
    }
  }
}
