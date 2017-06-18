import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private _httpService: HttpService){}
  title = 'GitHub Score';
  username = null;
  userExists = null;
  score = null;
  promise;

  onSubmit(){
  console.log("Submitting");
  console.log(this.username);
  this.promise = this._httpService.retrieveGithubUser(this.username)
    console.log(this.promise);
    if (this.promise) {
      this.promise.then( (user) => {
        console.log("user.id is " + user.id)
        if (user.id) {
          this.userExists = true;
          this.score = user.public_repos + user.followers;
          console.log("userExists = " +this.userExists)
          console.log("score is " + this.score)
        } else {
          this.userExists = false;
          this.score = null;
        }
        this.username = null;
        console.log(this.username)
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


