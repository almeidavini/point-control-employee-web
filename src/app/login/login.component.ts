import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { SignInData } from '../interfaces/SignInData';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private apiService: ApiService, private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      cpf: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  get cpf() {
    return this.loginForm.get('cpf')?.value
  }

  get password() {
    return this.loginForm.get('password')?.value
  }

  login() {
    const credentials : SignInData = {
     cpf: this.cpf, 
     password: this.password
    }

    this.apiService.login(credentials).subscribe(
      () => {
        this.router.navigate(['home-admin'])
      }, error => {
        this._snackBar.open(error.error.error, 'Fechar');
      }
    )
  }
}
