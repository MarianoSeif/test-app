import { Component } from '@angular/core';
import { Usuario } from './clases/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';
  unUsuario: Usuario;
  
  constructor() {
    this.unUsuario= new Usuario();
  }
  saludar(){
    console.log('Hola mundo');
  }
}
