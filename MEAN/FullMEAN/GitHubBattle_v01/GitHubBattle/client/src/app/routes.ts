import { Routes, RouterModule } from '@angular/router';
import { BattleComponent } from './battle/battle.component'

const APP_ROUTES: Routes = [
    { path: '', pathMatch: 'full', component: BattleComponent}
]

export const routing = RouterModule.forRoot(APP_ROUTES);