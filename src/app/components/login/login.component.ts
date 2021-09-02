import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = new Usuario();
  userName: string = '';
  pass: string = '';
  mensaje: string = '';

  constructor(private router: Router) { 
    this.usuario.nombre = 'admin';
    this.usuario.clave = 'admin';
  }

  ngOnInit(): void {
  }

  onClick(){
    this.mensaje = '';
    //if(this.userName == 'admin' && this.pass == 'admin'){
    if(this.userName == this.usuario.nombre && this.pass == this.usuario.clave){
      this.router.navigate(['/home']);
    }else{
      this.mensaje = 'Datos incorrectos!!';
      this.userName = '';
      this.pass = '';
    }
  }

}
