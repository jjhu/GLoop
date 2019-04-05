import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'mainview',
        children: [
          { path: '', loadChildren: '../pages/mainview/mainview.module#MainviewPageModule' }
        ]
      },
      {
        path: 'caregivers',
        children: [
          { path: '', loadChildren: '../pages/caregivers/caregivers.module#CaregiversPageModule' }
        ]
      },
      {
        path: 'help',
        children: [
          { path: '', loadChildren: '../pages/help/help.module#HelpPageModule' }
        ]
      },
      {
        path: 'profile',
        children: [
          { path: '', loadChildren: '../pages/profile/profile.module#ProfilePageModule' }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/mainview',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/mainview',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
