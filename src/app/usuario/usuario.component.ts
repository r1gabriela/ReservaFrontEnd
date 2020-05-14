import { Usuario } from './../shared/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  displayDialog: boolean;

  selectedUsuario: Usuario;

  usuario: Usuario;

  newUsuario: boolean;

  usuarios: Usuario[];

  cols: any[];

  ngOnInit() {
    this.cols = [
      { field: 'nome', header: 'Nome' },
      { field: 'cpf', header: 'CPF' },
      { field: 'login', header: 'Login' },
      { field: 'ativo', header: 'Ativo' }
    ];
  }

  showDialogToAdd() {
    this.newUsuario = true;
    this.displayDialog = true;
    this.usuario = new Usuario();
  }

  save() {
    this.displayDialog = false;
  }

  delete() {
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.displayDialog = true;
  }
}
