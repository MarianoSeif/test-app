import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiensoy',
  templateUrl: './quiensoy.component.html',
  styleUrls: ['./quiensoy.component.css']
})
export class QuiensoyComponent implements OnInit {
  data: Object = {};
  userName: string = '';
  id: string = '';
  repos: number = 0;
  avatarUrl:string = '';

  constructor() { }

  ngOnInit(): void {
    fetch('https://api.github.com/users/MarianoSeif')
    .then(response => response.json())
    .then(response => {
      //console.log(response);
      this.userName = response.login;
      this.id = response.id;
      this.repos = response.public_repos;
      this.avatarUrl = response.avatar_url;
    })
  }

}
