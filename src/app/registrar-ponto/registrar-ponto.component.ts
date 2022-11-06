import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-ponto',
  templateUrl: './registrar-ponto.component.html',
  styleUrls: ['./registrar-ponto.component.css']
})
export class RegistrarPontoComponent implements OnInit {
  data: string = this.dataHora();

  constructor(private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
  }
  
  openSnackBar() {
    this._snackBar.open('Marcação de ponto realizada com sucesso!', 'Fechar',{
      duration: 3000
    });

    this.router.navigate(['/', 'home-admin'])
  }

  dataHora() {
    var data = new Date();
    var dia: any = data.getDate();
    var mes: any = data.getMonth() + 1;
    var horas: any = new Date().getHours();
    var minutos: any = new Date().getMinutes();

    if(dia < 10){
      dia = "0" + dia;
    }

    if (mes < 10) {
       mes = "0" + mes;
    }

    if (horas < 10) {
       horas = "0" + horas;
    }

    if (minutos < 10) {
       minutos = "0" + minutos;
    }

    return `${dia}-${mes} ${horas}:${minutos}`;
  }
}
