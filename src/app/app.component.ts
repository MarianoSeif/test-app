import { Component } from '@angular/core';
import {Router} from '@angular/router';
// import * as internal from 'stream';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    
  constructor(private router: Router) { 
    this.router.navigate(['/login']);
  }

}
