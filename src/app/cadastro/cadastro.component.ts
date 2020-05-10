import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Usuario } from '../shared/usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  formCadastro: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(){
    this.createForm(new Usuario());
  }

  createForm(usuario: Usuario) {
    this.formCadastro = this.formBuilder.group({
      nome: [usuario.nome],
      login: [usuario.login],
      senha: [usuario.senha],
      cpf: [usuario.cpf],
      telefone: [usuario.telefone],
      email: [usuario.email]
    });
  }
}
