import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EsqueceuSenhaComponent } from './esqueceu-senha/esqueceu-senha.component';
import { AlterarSenhaComponent } from './alterar-senha/alterar-senha.component';
import { RegistrarComputadorComponent } from './registrar-computador/registrar-computador.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { RegistrarPontoComponent } from './registrar-ponto/registrar-ponto.component';
import { CadastrarFuncionarioComponent } from './cadastrar-funcionario/cadastrar-funcionario.component';
import { RegistrarAbonoComponent } from './registrar-abono/registrar-abono.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EsqueceuSenhaComponent,
    AlterarSenhaComponent,
    RegistrarComputadorComponent,
    HomeAdminComponent,
    RegistrarPontoComponent,
    CadastrarFuncionarioComponent,
    RegistrarAbonoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
