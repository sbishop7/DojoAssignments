import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BattleComponent } from './battle/battle.component';
import { RankingsComponent } from  './rankings/rankings.component';

const routes: Routes = [
  { path: '', pathMatch: "full", redirectTo: '/battle' },
  { path: 'battle', component: BattleComponent },
  { path: 'rankings', component: RankingsComponent }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
