import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module';
import { FlexLayoutModule} from '@angular/flex-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { NavMenuComponent } from './nav-menu/nav-menu.component';
// import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    // HttpClientModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    FlexLayoutModule,
    LayoutModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
