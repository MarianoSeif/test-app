import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  constructor(public usuarioService: UsuarioService, private router: Router) {
    
  }

  ngOnInit(): void {
  }

  onClickLogout() {
    this.usuarioService.logout();
    this.router.navigate(['/login']);
  }

}
