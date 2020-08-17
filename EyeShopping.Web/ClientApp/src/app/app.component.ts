import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'app';
  showHomeHeader = false;
  showHomeSidebar = false;
  showHomeFooter = false;
  showAdminHeader = false;
  showAdminSidebar = false;
  showAdminFooter = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showHomeHeader = this.activatedRoute.firstChild.snapshot.data.showHomeHeader !== false;
        this.showHomeSidebar = this.activatedRoute.firstChild.snapshot.data.showHomeSidebar !== false;
        this.showHomeFooter = this.activatedRoute.firstChild.snapshot.data.showHomeFooter !== false;
        this.showAdminHeader = this.activatedRoute.firstChild.snapshot.data.showAdminHeader !== false;
        this.showAdminFooter = this.activatedRoute.firstChild.snapshot.data.showAdminFooter !== false;
        this.showAdminSidebar = this.activatedRoute.firstChild.snapshot.data.showAdminSidebar !== false;
      }
    });
  }

}
