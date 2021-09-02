import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-t1',
  templateUrl: './login-t1.component.html',
  styleUrls: ['./login-t1.component.css']
})
export class LoginT1Component implements OnInit {
  userName: string = '';
  pass: string = '';
  message: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    console.log("User: "+this.userName);
    console.log("Pass: "+this.pass);
    this.message = 'Ingresando...'
  }

}
