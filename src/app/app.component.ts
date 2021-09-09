import { Component } from '@angular/core';
import {Router} from '@angular/router';
//import { AngularFireDatabase } from '@angular/fire/compat/database';
// import * as internal from 'stream';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {    
  constructor(private router: Router /* , database: AngularFireDatabase */ ) { 
    this.router.navigate(['/login']);
  }
}
