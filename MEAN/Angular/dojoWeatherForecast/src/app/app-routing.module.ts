import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChicagoComponent } from './chicago/chicago.component';
import { WashingtonComponent } from './washington/washington.component';
import { DallasComponent } from './dallas/dallas.component';
import { BurbankComponent } from './burbank/burbank.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { SeattleComponent } from './seattle/seattle.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/seattle'},
  {path: 'seattle', component: SeattleComponent},
  {path: 'chicago', component: ChicagoComponent},
  {path: 'washington', component: WashingtonComponent},
  {path: 'dallas', component: DallasComponent},
  {path: 'burbank', component: BurbankComponent},
  {path: 'sanjose', component: SanjoseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
