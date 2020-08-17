import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/admin-panel',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
    data: {
      showAdminHeader: false,
      showAdminSidebar: false,
      showAdminFooter: false,
    }
  },
  { path: 'admin-panel', loadChildren: './admin-panel/admin-panel.module#AdminPanelModule',
    data: {
      showHomeHeader: false,
      showHomeSidebar: false,
      showHomeFooter: false,
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
