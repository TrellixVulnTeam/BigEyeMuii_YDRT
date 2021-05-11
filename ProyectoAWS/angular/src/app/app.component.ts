import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';

  email: string = "";

  constructor (private authService: AuthService) {

  }

  // Función que nos devuelve si el usuario está logueado o no dependiendo si
  // existe el ACCESS_TOKEN.
  usuarioLogueado() : Boolean {
    if (localStorage.getItem("ACCESS_TOKEN")) {
      this.email = localStorage.getItem('EMAIL')!;
      return true;
    } else {
      return false;
    }
  }


  cerrarSesion() {
    this.authService.logout();
  }

}