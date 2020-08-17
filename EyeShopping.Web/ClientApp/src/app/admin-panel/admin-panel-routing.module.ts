import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminPanelComponent } from './admin-panel.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: AdminPanelComponent },
  { path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }
