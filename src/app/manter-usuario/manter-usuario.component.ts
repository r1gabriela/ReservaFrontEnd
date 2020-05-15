import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../shared/service/usuarioService';
import { Usuario } from '../shared/usuario';

@Component({
  selector: 'app-manter-usuario',
  templateUrl: './manter-usuario.component.html',
  styleUrls: ['./manter-usuario.component.css']
})
export class ManterUsuarioComponent implements OnInit {

  usuario: Usuario;

  usuarios: Usuario[];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.listarTodos();
  }

  listarTodos(){
    this.usuarioService.listarTodos().subscribe(resp => this.usuarios = resp);
  }

  excluir(){
    this.usuarioService.excluir(this.usuario).subscribe(resp => Boolean);
  }

  salvar(){
    this.usuarioService.salvar(this.usuario).subscribe(usuario => this.usuario = usuario);
  }

}
