import { Component } from '@angular/core';
import { AuthService } from './shared/service/auth.service';

declare const $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Smart Booking';

  mostrarMenu: boolean = false;

  isMobileMenu() {
    if ($(window).width() > 995) {
      return false;
    }
    return true;
  };

  constructor(private authService: AuthService){}

  ngOnInit(){
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }

}
