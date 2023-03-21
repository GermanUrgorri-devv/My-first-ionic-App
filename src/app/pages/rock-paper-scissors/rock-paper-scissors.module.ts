import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RockPaperScissorsPageRoutingModule } from './rock-paper-scissors-routing.module';

import { RockPaperScissorsPage } from './rock-paper-scissors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RockPaperScissorsPageRoutingModule
  ],
  declarations: [RockPaperScissorsPage]
})
export class RockPaperScissorsPageModule {}
