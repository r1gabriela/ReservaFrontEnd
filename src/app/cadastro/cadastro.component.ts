import { Component, OnInit } from '@angular/core';
import { Usuario } from '../shared/usuario';
import { UsuarioService } from "../shared/service/usuario.service";
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuarioForm: FormGroup;

  usuario: Usuario = new Usuario();

  constructor(private usuarioService: UsuarioService, private fb: FormBuilder) { }

  ngOnInit() {
    this.usuarioForm = this.fb.group({
      'nome': new FormControl('', Validators.compose([Validators.required, Validators.maxLength(255)])),
      'senha': new FormControl('', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(16)])),
      'cpf': new FormControl('', Validators.compose([Validators.required, Validators.pattern(/^\d{11}$/)])),
      'login': new FormControl('',Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(8)]))
    });
  }

  cadastro() {
    this.usuarioService.cadastrar(this.usuario).subscribe(usuario => this.usuario = usuario);
  }
}


