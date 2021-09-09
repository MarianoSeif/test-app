import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Usuario } from '../clases/usuario';
import { Observable } from 'rxjs';
import { getDatabase, ref, onValue, child, get} from "firebase/database";
import { isThisTypeNode } from 'typescript';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuario: Usuario;
  private dbPath = '/usuarios';  
  usuariosList: AngularFireList<Usuario>;
  loggedIn: boolean = false;

  constructor(private db: AngularFireDatabase) { 
    this.usuario = new Usuario();
    this.usuariosList = db.list(this.dbPath);
  }

  /* buscarUsuario2(user: string, pass: string){
    
    const dbRef = ref(getDatabase());
    get(child(dbRef, 'usuarios')).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  } */

  buscarUsuario(user: string, pass: string){
    const db = getDatabase();
    const usuariosRef = ref(db, 'usuarios');
    
    onValue(usuariosRef, (snapshot) => {
      snapshot.forEach(userdb => {
        if(userdb.val().usuario == user && userdb.val().clave == pass){
          this.usuario = userdb.val();
          this.loggedIn = true;
        }
      }) ;
    });
    return this.loggedIn;
  }
  
  registrarUsuario(userName: string, pass: string, nombre: string){
    
    this.usuario.nombre = nombre;
    this.usuario.usuario = userName;
    this.usuario.clave = pass;
    this.create(this.usuario);
    this.loggedIn = true;
  }

  logout(){
    this.loggedIn = false;
  }
  
  getAll(): AngularFireList<Usuario> {
    return this.usuariosList;
  }

  create(usuario: Usuario): any {
    return this.usuariosList.push(usuario);
  }

  update(key: string, value: any): Promise<void> {
    return this.usuariosList.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.usuariosList.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.usuariosList.remove();
  }

}
