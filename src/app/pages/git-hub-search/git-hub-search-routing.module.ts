import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GitHubSearchPage } from './git-hub-search.page';

const routes: Routes = [
  {
    path: '',
    component: GitHubSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GitHubSearchPageRoutingModule {}
