import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

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

  constructor(private router: Router, private usuarioService: UsuarioService) { 
    this.usuario.nombre = 'admin';
    this.usuario.clave = 'admin';
  }

  ngOnInit(): void {
  }

  onClick(){
    this.usuarioService.usuario.nombre = 'testt';
    this.mensaje = '';
    //if(this.userName == 'admin' && this.pass == 'admin'){
      this.usuarioService.buscarUsuario(this.usuario);
    if(this.userName == this.usuario.nombre && this.pass == this.usuario.clave){
      this.router.navigate(['/home']);
    }else{
      this.mensaje = 'Datos incorrectos!!';
      this.userName = '';
      this.pass = '';
    }
  }

}
