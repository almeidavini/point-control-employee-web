import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-ponto',
  templateUrl: './registrar-ponto.component.html',
  styleUrls: ['./registrar-ponto.component.css']
})
export class RegistrarPontoComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
  }

  openSnackBar() {
    this._snackBar.open('Marcação de ponto realizada com sucesso!', 'Fechar',{
      duration: 3000
    });

    this.router.navigate(['/', 'home-admin'])
  }
}
