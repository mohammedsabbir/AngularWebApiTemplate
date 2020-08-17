import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-sidebar',
  templateUrl: './home-sidebar.component.html',
  styleUrls: ['./home-sidebar.component.css']
})
export class HomeSidebarComponent implements OnInit {

  constructor() {
    console.log('Sidebar constructor called');
  }

  ngOnInit(): void {
  }

}
