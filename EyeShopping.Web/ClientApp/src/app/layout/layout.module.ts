import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { HomeSidebarComponent } from './home-sidebar/home-sidebar.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FlexLayoutModule,
    RouterModule,
    NgbModule
  ],
  exports: [
    HomeHeaderComponent,
    HomeFooterComponent,
    HomeSidebarComponent,
    AdminSidebarComponent,
    AdminHeaderComponent,
    AdminFooterComponent
  ],
  declarations: [
    HomeHeaderComponent,
    HomeFooterComponent,
    HomeSidebarComponent,
    AdminSidebarComponent,
    AdminHeaderComponent,
    AdminFooterComponent
  ],
  bootstrap: [
    HomeHeaderComponent,
    HomeFooterComponent,
    HomeSidebarComponent,
    AdminSidebarComponent,
    AdminHeaderComponent,
    AdminFooterComponent
  ]
})
export class LayoutModule { }
