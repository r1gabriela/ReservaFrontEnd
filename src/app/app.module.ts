import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { routing } from './app.routing';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PanelMenuModule } from 'primeng/panelmenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {DropdownModule} from 'primeng/dropdown';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { HttpClientModule } from '@angular/common/http';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ToastModule} from 'primeng/toast';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { MenuComponent } from './menu/menu.component';
import { ManterDataComemoracaoComponent } from './manter-data-comemoracao/manter-data-comemoracao.component';
import { ManterMesaComponent } from './manter-mesa/manter-mesa.component';
import { ManterDependenteComponent } from './manter-dependente/manter-dependente.component';
import { ManterTipoComemoracaoComponent } from './manter-tipo-comemoracao/manter-tipo-comemoracao.component';
import { ManterClienteComponent } from './manter-cliente/manter-cliente.component';
import { ManterFuncionarioComponent } from './manter-funcionario/manter-funcionario.component';
import { ManterUsuarioComponent } from './manter-usuario/manter-usuario.component';
import { ClienteComponent } from './cliente/cliente.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    MenuComponent,
    ManterDataComemoracaoComponent,
    ManterMesaComponent,
    ManterDependenteComponent,
    ManterTipoComemoracaoComponent,
    ManterClienteComponent,
    ManterFuncionarioComponent,
    ManterUsuarioComponent,
    ClienteComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    routing,
    InputTextModule,
    ButtonModule,
    BrowserAnimationsModule,
    PanelMenuModule,
    HttpClientModule,
    FormsModule,
    CalendarModule,
    AutoCompleteModule,
    DropdownModule,
    TableModule,
    DialogModule,
    TieredMenuModule,
    MessagesModule,
    MessageModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
