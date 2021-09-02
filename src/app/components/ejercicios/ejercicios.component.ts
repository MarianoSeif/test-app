import { Component, OnInit } from '@angular/core';
import { Operaciones } from '../../clases/operaciones';
import { Usuario } from '../../clases/usuario';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css']
})
export class EjerciciosComponent implements OnInit {
  title = 'test-app';
  unUsuario: Usuario;
  operacion: Operaciones;
  
  constructor() {
    this.unUsuario= new Usuario();
    this.unUsuario.nombre = 'admin';
    this.unUsuario.clave = 'admin';
    this.operacion= new Operaciones();
  }
  
  ngOnInit(): void {
  }

  Limpiar(){
    this.operacion.edad1 = 0;
    this.operacion.edad2 = 0;
    this.operacion.suma = 0;
    this.operacion.promedio = 0;
  }
  

}
