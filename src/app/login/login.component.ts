import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cpf : string = "";
  senha: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  login(): void {
    console.log(this.cpf, this.senha);
  }

}
