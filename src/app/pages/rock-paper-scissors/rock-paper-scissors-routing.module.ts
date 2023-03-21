import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RockPaperScissorsPage } from './rock-paper-scissors.page';

const routes: Routes = [
  {
    path: '',
    component: RockPaperScissorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RockPaperScissorsPageRoutingModule {}
