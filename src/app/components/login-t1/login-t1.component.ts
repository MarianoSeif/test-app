import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-t1',
  templateUrl: './login-t1.component.html',
  styleUrls: ['./login-t1.component.css']
})
export class LoginT1Component implements OnInit {
  userName: string = '';
  pass: string = '';
  message: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  siguiente(){
    console.log('siguiente');
    var modelo = this;
    setTimeout(function(){
      modelo.router.navigate(['casa']);
    }, 2000);
  }

  onClick(){
    console.log("User: "+this.userName);
    console.log("Pass: "+this.pass);
    this.message = 'Ingresando...'
  }

}
