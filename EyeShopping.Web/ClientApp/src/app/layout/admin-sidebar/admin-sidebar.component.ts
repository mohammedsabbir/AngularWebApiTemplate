import { Component,  OnInit } from '@angular/core';

import * as data from '../../system-config/data/navigation.json';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css'],

})
export class AdminSidebarComponent implements OnInit {

  isSidebarExpanded = true;

  private isToggle = false;
  private issubToggle = false;
  private prevElement = '';
  private prevSubElement = '';

  navigations: any;

  constructor() { }

  ToggleSidebar() {
    if (this.isSidebarExpanded) {
      this.isSidebarExpanded = false;
    } else {
      this.isSidebarExpanded = true;
    }
  }

  toggleLink(element) {
    const elementInfo = document.querySelector('#' + element);
    const childElement = elementInfo.querySelector('ul.mm-collapse');
    if (this.prevElement === '') {
      this.prevElement = element;
    }
    if (this.prevElement !== '' && this.prevElement !== element) {
      this.isToggle = false;
      document.querySelector('#' + this.prevElement).classList.remove('mm-active');
      document.querySelector('#' + this.prevElement).querySelector('ul.mm-collapse').classList.remove('visible');
    }
    if (!this.isToggle) {
      this.isToggle = true;
      elementInfo.classList.add('mm-active');
      childElement.classList.add('visible');
      this.prevElement = element;
    } else {
      this.isToggle = false;
      elementInfo.classList.remove('mm-active');
      childElement.classList.remove('visible');
    }
  }

  toggleSubLink(element) {
    console.log(this.prevSubElement);
    console.log(element);
    const elementInfo = document.querySelector('#' + element);
    const childElement = elementInfo.querySelector('ul.mm-collapse');
    if (this.prevSubElement === '') {
      this.prevSubElement = element;
    }
    if (this.prevSubElement !== '' && this.prevSubElement !== element) {
      this.issubToggle = false;
      document.querySelector('#' + this.prevSubElement).classList.remove('mm-active');
      document.querySelector('#' + this.prevSubElement).querySelector('ul.mm-collapse').classList.remove('visible');
    }
    if (!this.issubToggle) {
      this.issubToggle = true;
      elementInfo.classList.add('mm-active');
      childElement.classList.add('visible');
      this.prevSubElement = element;
    } else {
      this.issubToggle = false;
      elementInfo.classList.remove('mm-active');
      childElement.classList.remove('visible');
    }
  }

  ngOnInit() {
    console.log(data);
    console.log((data as any).default);
    this.navigations = (data as any).default;
    // (data as any).default);
    console.log(this.navigations);

  }
}
