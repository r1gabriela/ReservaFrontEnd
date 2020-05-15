import { UsuarioComponent } from './usuario/usuario.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ManterMesaComponent } from './manter-mesa/manter-mesa.component';
import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ManterDataComemoracaoComponent } from './manter-data-comemoracao/manter-data-comemoracao.component';
import { ManterDependenteComponent } from './manter-dependente/manter-dependente.component';
import { ManterTipoComemoracaoComponent } from './manter-tipo-comemoracao/manter-tipo-comemoracao.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';

const APP_ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'dataComemorativa/manter',
    component: ManterDataComemoracaoComponent
  },
  {
    path: 'mesa/manter',
    component: ManterMesaComponent
  },
  {
    path: 'dependente/manter',
    component: ManterDependenteComponent
  },
  {
    path: 'tipoComemoracao/manter',
    component: ManterTipoComemoracaoComponent
  },
  {
    path: 'cliente/manter',
    component: ClienteComponent
  },
  {
    path: 'funcionario/manter',
    component: FuncionarioComponent
  },
  {
    path: 'usuario/manter',
    component: UsuarioComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
