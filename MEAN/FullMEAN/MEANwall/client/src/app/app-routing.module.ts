import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { WallComponent } from './wall/wall.component';

const routes: Routes = [
  { path: '', pathMatch: "full", redirectTo: '/login' },
  { path: 'login', component: UserComponent },
  { path: 'messages', component: WallComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
