import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
@Component({
  selector: 'app-admin-footer',
  templateUrl: './admin-footer.component.html',
  styleUrls: ['./admin-footer.component.css']
})
export class AdminFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).on('click', function(event) {
      if ($(event.target).closest('.footernotification').length) {
        // Hide the menus.
        $('.footernotification').addClass('show');
      }
  });
  }

}
