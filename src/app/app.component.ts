import { Component } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Smart Booking';

  isMobileMenu() {
    if ($(window).width() > 995) {
      return false;
    }
    return true;
  };

}
