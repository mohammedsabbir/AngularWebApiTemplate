import { Component, OnInit } from '@angular/core';

import $ from 'jquery';
@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {


  constructor() { }


  isSearchExpand = false;
  successMessage = '';

  expandSearch(searchData: string) {
    if (!this.isSearchExpand) {
      this.isSearchExpand = true;
    } else {
      // search code goes here.
      this.successMessage = searchData;
    }
  }
  collapseSearch() {
    this.isSearchExpand = false;
  }



  ngOnInit(): void {
    $(document).ready(function() {
    });
    $(document).on('click', function(event) {
        if ($(event.target).closest('.mynotification').length) {
          // Hide the menus.
          $('.mynotification').addClass('show');
        }
    });
  }



}
