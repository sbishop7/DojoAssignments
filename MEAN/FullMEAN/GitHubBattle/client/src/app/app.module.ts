import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RankingsComponent } from './rankings/rankings.component';
import { BattleComponent } from './battle/battle.component';
import { Player1Component } from './battle/player1/player1.component';
import { Player2Component } from './battle/player2/player2.component';
import { ResultsComponent } from './battle/results/results.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
