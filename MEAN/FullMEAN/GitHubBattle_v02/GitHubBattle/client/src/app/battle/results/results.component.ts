import { Component, OnInit, OnDestroy } from '@angular/core';
import { Player1Service } from './../../player1.service';
import { Player2Service } from './../../player2.service';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { Player } from './../player'


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit, OnDestroy {
  player1;
  player2;

  p1subscription: Subscription;
  p2subscription: Subscription;

  constructor(
    private _player1Service: Player1Service,
    private _player2Service: Player2Service,
    private _router: Router
  ) {
    this.p1subscription = this._player1Service.subject
      .subscribe( data => { this.player1 = data; }, err => {}, () => {} );
    this.p2subscription = this._player2Service.subject
      .subscribe( data => { this.player2 = data; }, err => {}, () => {} );
   }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.p1subscription.unsubscribe();
    this.p2subscription.unsubscribe();
  }

  reset(){
    this._player2Service.subject.next( new Player() );
    this._player2Service.subject.next( new Player() );
    this._router.navigate( ['/'] );
  }

}
