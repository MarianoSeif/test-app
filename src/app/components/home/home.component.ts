import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  usuarioActual: Usuario;
  unUsuario: Usuario;
    

  constructor(private usuarioService: UsuarioService) {
    this.usuarioActual = usuarioService.usuario;
    this.unUsuario = new Usuario();
    this.unUsuario.nombre = 'test';
    
    //usuarioService.create(this.unUsuario);
    /* usuarioService.getAllData().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.usuarios = data;
    }); */
    
    /* this.usuarios = usuarioService.getAllData();
    
    this.usuarios.forEach(function(usuario){
      console.log(usuario);
    });    
    
    usuarioService.getAllData().pipe(take(1)).subscribe(data => {
      this.usuarios = data;
    }); */

    
  }

  ngOnInit(): void {
  }

}
