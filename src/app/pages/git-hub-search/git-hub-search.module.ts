import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

import { GitHubSearchPageRoutingModule } from './git-hub-search-routing.module';

import { GitHubSearchPage } from './git-hub-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GitHubSearchPageRoutingModule,
    HttpClientModule
  ],
  declarations: [GitHubSearchPage]
})
export class GitHubSearchPageModule {}
