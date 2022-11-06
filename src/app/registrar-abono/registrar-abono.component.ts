import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-abono',
  templateUrl: './registrar-abono.component.html',
  styleUrls: ['./registrar-abono.component.css']
})
export class RegistrarAbonoComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
  }

  openSnackBar() {
    this._snackBar.open('Abono registrado com sucesso!', 'Fechar',{
      duration: 3000
    });

    this.router.navigate(['/', 'home-admin'])
  }
}
