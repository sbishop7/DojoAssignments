import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";
import { ScoreService } from './../../play/score.service';
import { Score } from './../../play/score';
import { QuestionService } from './../new-question/question.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  scores;
  message="";
  search = "";

  constructor(private _router: Router, private _scoreService: ScoreService, private _questionService: QuestionService ) { }
  
  ngOnInit() {
    this.get_all_scores();
    // console.log(this.scores)
    this.message += this._scoreService.message;
    this.message += this._questionService.message;
    this._scoreService.message = ""
    this._questionService.message = ""
    // console.log(this.message)
  }

  lets_play(){
    this._router.navigate(['/lets_play'])
  }

  get_all_scores(){
    // console.log("retrieving Scores")
    this._scoreService.all_scores()
        .then( data => { 
          // console.log(data),
          this.scores = data })
        .catch( err => { console.log("Error retrieving all scores... ", err);})
    // console.log(this.scores)
  }
  // searchScores(){
  //   console.log("searching")
  // }

  ngOnDestroy(){
    // this.message = ""
    // this._scoreService.message = ""
  }
}
