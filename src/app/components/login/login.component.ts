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
  userName: string;
  pass: string;
  mensaje: string;

  constructor(private router: Router, private usuarioService: UsuarioService) {
    this.mensaje = '';
    this.userName = '';
    this.pass = '';
    if(this.usuarioService.loggedIn){
      console.log('logged in');
    }
  }

  ngOnInit(): void {
  }

  onClick(){
    this.usuarioService.buscarUsuario(this.userName, this.pass);
    this.mensaje = '';
    if(this.userName == '' || this.pass == ''){
      this.mensaje = 'Complete ambos datos';
    }else{
      //this.mensaje = 'Recuperando datos';
      //this.usuarioService.buscarUsuario2(this.userName, this.pass);      
      if(this.usuarioService.buscarUsuario(this.userName, this.pass)){
        this.router.navigate(['/home']);
      }else{
        this.mensaje = 'Datos Incorrectos';
      }
    }
  }

  onClickCompletarDatosAdmin(){
    this.userName = 'admin';
    this.pass = 'admin';
  }

  onClickCompletarDatosMfs(){
    this.userName = 'mfs';
    this.pass = 'clave';    
  }

  onClickRegistrar(){
    this.mensaje = '';    
    if(this.userName == '' || this.pass == ''){
      this.mensaje = 'Complete ambos datos';
    }else{
      this.usuarioService.registrarUsuario(this.userName, this.pass, 'Señor '+this.userName);
      if(this.usuarioService.loggedIn){
        this.router.navigate(['/home']);
      }else{
        this.mensaje = 'No se pudo crear el usuario';
      }
      /* if(this.usuarioService.buscarUsuario(this.userName, this.pass)){
        this.router.navigate(['/home']);
      }else{
        this.mensaje = 'Datos Incorrectos';
      } */
    }
  }

}
