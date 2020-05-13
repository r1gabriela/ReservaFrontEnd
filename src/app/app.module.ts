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
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { MenuComponent } from './menu/menu.component';
import { ManterDataComemoracaoComponent } from './manter-data-comemoracao/manter-data-comemoracao.component';
import { ManterMesaComponent } from './manter-mesa/manter-mesa.component';
import { ManterDependenteComponent } from './manter-dependente/manter-dependente.component';
import { ManterTipoComemoracaoComponent } from './manter-tipo-comemoracao/manter-tipo-comemoracao.component';

//import { TipoComemoracaoServiceService } from './manter-tipo-comemoracao/tipo-comemoracao-service.service';

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
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    routing,
    InputTextModule,
    ButtonModule,
    BrowserAnimationsModule,
    PanelMenuModule,
    CalendarModule,
    AutoCompleteModule,
    DropdownModule,
    TableModule,
    DialogModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
