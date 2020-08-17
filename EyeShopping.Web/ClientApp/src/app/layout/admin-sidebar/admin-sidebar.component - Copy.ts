import { Component,  OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css'],

})
export class AdminSidebarComponent implements OnInit {

  isSidebarExpanded = true;

  private isToggle = false;
  private prevElement = '';
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
    console.log('current element : ' + element);
    console.log('previous element : ' + this.prevElement);
    console.log('toggle status :' + this.isToggle);
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
      // childElement.classList.remove('mm-hide');
      this.prevElement = element;
      // if (this.prevElement !== '' && this.prevElement !== element) {
      //   document.querySelector('#' + this.prevElement).classList.remove('mm-active');
      //   document.querySelector('#' + this.prevElement).querySelector('ul.mm-collapse').classList.remove('mm-show');
      //   this.prevElement = element;
      // }
    } else {
      this.isToggle = false;
      elementInfo.classList.remove('mm-active');
      // childElement.classList.add('mm-hide');
      childElement.classList.remove('visible');
    }
  }

  ngOnInit() {
  }
}
// 'mm-active'
// 'mm-show' : '.mm-hide'
