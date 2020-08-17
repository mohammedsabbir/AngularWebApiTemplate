import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel.component';
import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { CatalogModule } from './catalog/catalog.module';
import { ConfigurationModule } from './configuration/configuration.module';
import { ContentManagementModule } from './content-management/content-management.module';
import { CustomersModule } from './customers/customers.module';
import { ReportModule } from './report/report.module';
import { SalesModule } from './sales/sales.module';
import { SystemModule } from './system/system.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AdminPanelComponent,
    DashboardComponent],
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    CatalogModule,
    ConfigurationModule,
    ContentManagementModule,
    CustomersModule,
    ReportModule,
    SalesModule,
    SystemModule
  ]
})
export class AdminPanelModule { }
