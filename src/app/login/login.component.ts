import { IUser } from './../interfaces/User';
import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.form = this.fb.group({
      cpf: [null, [Validators.required]],
      senha: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  login(): void {
    const user: IUser = {
      cpf: '49358418850',
      password: '123'
    }

    this.apiService.Autenticar(user)
      .then(login => console.log(login))
      .catch(error => console.log(error));
  }

}
