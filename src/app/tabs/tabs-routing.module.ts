import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'photos',
        loadChildren: () => import('../pages/photos/photos.module').then(m => m.PhotosPageModule)
      },
      {
        path: 'rock-paper-scissors',
        loadChildren: () => import('../pages/rock-paper-scissors/rock-paper-scissors.module').then(m => m.RockPaperScissorsPageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../pages/login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'api',
        loadChildren: () => import('../pages/api/api.module').then(m => m.ApiPageModule)
      },
      {
        path: 'git-hub-search',
        loadChildren: () => import('../pages/git-hub-search/git-hub-search.module').then(m => m.GitHubSearchPageModule)
      }


    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
