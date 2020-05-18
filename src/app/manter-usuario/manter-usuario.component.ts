import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../shared/service/usuario.service';
import { Usuario } from '../shared/usuario';

@Component({
  selector: 'app-manter-usuario',
  templateUrl: './manter-usuario.component.html',
  styleUrls: ['./manter-usuario.component.css']
})
export class ManterUsuarioComponent implements OnInit {

  displayDialog: boolean;

  selectedUsuario: Usuario;

  usuario: Usuario;

  newUsuario: boolean;

  usuarios: Usuario[];

  cols: any[];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.listarTodos();
  }

  showDialogToAdd() {
    this.newUsuario = true;
    this.displayDialog = true;
    this.usuario = new Usuario();
  }

  listarTodos(){
    this.usuarioService.listarTodos().subscribe(resp => this.usuarios = resp);
  }

  delete(){
    this.usuarioService.excluir(this.usuario).subscribe(resp => Boolean);
  }

  onRowSelect(event) {
    this.newUsuario = false;
    this.usuario = event.data;
    this.displayDialog = true;
  }

  save(){
    this.usuarioService.salvar(this.usuario).subscribe(usuario => this.usuario = usuario);
  }

}
