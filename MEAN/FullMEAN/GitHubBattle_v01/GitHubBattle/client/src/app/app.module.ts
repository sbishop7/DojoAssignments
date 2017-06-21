import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RankingsComponent } from './rankings/rankings.component';
import { BattleComponent } from './battle/battle.component';
import { Player1Component } from './battle/player1/player1.component';
import { Player2Component } from './battle/player2/player2.component';
import { ResultsComponent } from './battle/results/results.component';
import { GithubApiService } from './github-api.service'

@NgModule({
  declarations: [
    AppComponent,
    RankingsComponent,
    BattleComponent,
    Player1Component,
    Player2Component,
    ResultsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GithubApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
