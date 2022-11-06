import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.component.html',
  styleUrls: ['./alterar-senha.component.css']
})
export class AlterarSenhaComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
  }

  openSnackBar() {
    this._snackBar.open('Senha alterada com sucesso!', 'Fechar',{
      duration: 3000
    });

    this.router.navigate(['/', 'login'])
  }
}
