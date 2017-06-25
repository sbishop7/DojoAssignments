import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { UserService } from "./../user/user.service";
import { Question } from "./../home/new-question/question";
import { QuestionService } from "./../home/new-question/question.service";
import { ScoreService } from "./score.service";

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  user = {username: "", user_id: ""}
  all_questions = []


  trivia_questions: Array<any> =[]
  score = 0
  results: any
  guesses: Array<string> = []
  questionsToAsk = 3

  constructor(private _router: Router, private _userService: UserService, private _questionService: QuestionService, private _scoreService: ScoreService) {

   }

  ngOnInit() {
    this._userService.check_status()
      .then((data) => {
        if(data){
          this.user.username = data.username
          this.user.user_id = data.user_id
        }
      })
      .catch(() => this._router.navigate(["/login"]) )

    this.get_questions()
    this.get_answers()
    this.shuffle_questions()
  }

  cancel(){
    this._router.navigate(['/home'])
  }

  get_questions(){
    this._questionService.all_questions()
        .then( data => {
          this.all_questions = data
          this.shuffle_questions()
          for(var i = 0; i < this.questionsToAsk; i++){
            let newQuestion = {question: this.all_questions[i].question, answers: [], answer: this.all_questions[i].answer}
            newQuestion.answers = [this.all_questions[i].answer, this.all_questions[i].fakeAnswer1, this.all_questions[i].fakeAnswer2]
            for (var j = 0; j<newQuestion.answers.length; j++){
              let temp = newQuestion.answers[j];
              let randomSpot = Math.floor(Math.random()*newQuestion.answers.length);
              newQuestion.answers[j] = newQuestion.answers[randomSpot];
              newQuestion.answers[randomSpot] = temp;
            }
            this.trivia_questions.push(newQuestion);
          }
        })
        .catch (err => { console.log("error retrieving questions... ", err);})
  }

  get_answers(){
    if(this.all_questions.length>0){
      for(var i = 0; i < 3; i++){
          console.log("all questions count is " + this.all_questions.length)
          let idx = Math.floor( Math.random() * this.all_questions.length);
          let newQuestion = {question: this.all_questions[idx].question, answers: [], answer: this.all_questions[idx].answer}
          let answers = [this.all_questions[idx].answer, this.all_questions[idx].fakeAnswer1, this.all_questions[idx].fakeAnswer2]
          for (var j = 0; j<3; j++){
            let n = Math.floor( Math.random() * answers.length);
            newQuestion.answers.push(answers[n]);
            answers.splice(n, 1);
          }
          this.trivia_questions.push(newQuestion);
          this.all_questions.splice(idx, 1);
        }
    }

  
      
  }

  shuffle_questions(){
    for(var i = 0; i < this.all_questions.length; i++){
      let temp = this.all_questions[i];
      let randomSpot = Math.floor(Math.random()*this.all_questions.length);
      this.all_questions[i] = this.all_questions[randomSpot];
      this.all_questions[randomSpot] = temp;
    }
  }

  submit(){
    for(let i = 0; i<this.trivia_questions.length; i++){
      if(this.guesses[i] === this.trivia_questions[i].answer){
        this.score += 1;
      }
    }
    this.results = {username: this.user.username, score: this.score, outOf: this.questionsToAsk, percentage: Math.floor((this.score/this.questionsToAsk)*100)}
    console.log(this.results)
    this._scoreService.add(this.results)
      .then(() => { this._router.navigate(["/home"]) })
      .catch(() => console.log("Couldn't save score"))
    if(this.score === 3){
      this._scoreService.message = "That was great, " + this.user.username + "!  Your score is " + this.score + "/" + this.questionsToAsk + " (" + Math.floor((this.score/this.questionsToAsk)*100) + "%)."
    }else if(this.score === 0 ){
      this._scoreService.message = "Oh, " + this.user.username + "!  Your score is " + this.score + "/" + this.questionsToAsk + " (" + Math.floor((this.score/this.questionsToAsk)*100) + "%)."
    }else{
      this._scoreService.message = "That was ok, " + this.user.username + "!  Your score is " + this.score + "/" + this.questionsToAsk + " (" + Math.floor((this.score/this.questionsToAsk)*100) + "%)."
    }
  }


}
