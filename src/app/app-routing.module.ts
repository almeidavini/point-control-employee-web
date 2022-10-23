import { RegistrarAbonoComponent } from './registrar-abono/registrar-abono.component';
import { RegistrarPontoComponent } from './registrar-ponto/registrar-ponto.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { AlterarSenhaComponent } from './alterar-senha/alterar-senha.component';
import { EsqueceuSenhaComponent } from './esqueceu-senha/esqueceu-senha.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'esqueceu-senha',
    component: EsqueceuSenhaComponent
  },
  {
    path: 'alterar-senha',
    component: AlterarSenhaComponent
  },
  {
    path: 'home-admin',
    component: HomeAdminComponent
  },
  {
    path: 'registrar-ponto',
    component: RegistrarPontoComponent
  },
  {
    path: 'registrar-abono',
    component: RegistrarAbonoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
