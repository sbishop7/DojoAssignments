import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RankingsComponent } from './rankings/rankings.component';
import { BattleComponent } from './battle/battle.component';
import { ResultsComponent } from './battle/results/results.component';
import { GithubApiService } from './github-api.service';
import { PlayerComponent } from './battle/player/player.component';
import { PlayerService } from './battle/player.service';
import { ReadyPlayerComponent } from './battle/ready-player/ready-player.component';
import { Player1Service } from './player1.service';
import { Player2Service } from './player2.service';

@NgModule({
  declarations: [
    AppComponent,
    RankingsComponent,
    BattleComponent,
    ResultsComponent,
    PlayerComponent,
    ReadyPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    GithubApiService,
    PlayerService,
    Player1Service,
    Player2Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
