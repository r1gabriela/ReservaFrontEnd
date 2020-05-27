import { Component, OnInit } from '@angular/core';
import { Usuario } from '../shared/usuario';
import { UsuarioService } from "../shared/service/usuario.service";
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  providers: [MessageService]
})
export class CadastroComponent implements OnInit {

  usuarioForm: FormGroup;

  usuario: Usuario = new Usuario();

  constructor(private usuarioService: UsuarioService, private fb: FormBuilder, private messageService: MessageService, private router: Router) { }

  ngOnInit() {
    this.usuarioForm = this.fb.group({
      'nome': new FormControl('', Validators.compose([Validators.required, Validators.maxLength(255)])),
      'senha': new FormControl('', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(16)])),
      'cpf': new FormControl('', Validators.compose([Validators.required])),
      'login': new FormControl('', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(8)]))
    });
  }

  cadastro() {
    this.usuarioService.cadastrar(this.usuario).subscribe(usuario => {
      this.usuario = usuario;
      this.messageService.add({ key: 'msg', severity: 'success', summary: 'Cadastro', detail: "Operação efetuada com sucesso", life: 3000 });
      this.router.navigate[('cliente/cadastro/')]
    }, (error) => {
      this.messageService.add({ key: 'msg', severity: 'error', summary: 'Error', detail: error.message, life: 3000 });
    });
  }

}
