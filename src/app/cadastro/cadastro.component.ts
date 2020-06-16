import { Component, OnInit } from '@angular/core';
import { Usuario } from '../shared/usuario';
import { UsuarioService } from "../shared/service/usuario.service";
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { Role } from '../shared/role';
import { AutenticarServiceService } from '../shared/service/autenticar-service.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  providers: [MessageService]
})
export class CadastroComponent implements OnInit {

  usuarioForm: FormGroup;

  usuario: Usuario = new Usuario();

  constructor(private usuarioService: UsuarioService, private fb: FormBuilder, private messageService: MessageService, private router: Router, private autenticarService: AutenticarServiceService) { }

  ngOnInit() {
    this.usuarioForm = this.fb.group({
      'nome': new FormControl('', Validators.compose([Validators.required, Validators.maxLength(255)])),
      'senha': new FormControl('', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(16)])),
      'cpf': new FormControl('', Validators.compose([Validators.required])),
      'login': new FormControl('', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(8)]))
    });
  }

  cadastro() {
    this.usuario.role.idRole = 2;
    this.usuarioService.cadastrar(this.usuario).subscribe(usuario => {
      this.usuario = usuario;
      window.localStorage.setItem('logado', 'true');
      this.messageService.add({ key: 'msg', severity: 'success', summary: 'Cadastro', detail: "Operação efetuada com sucesso", life: 3000 });
      this.router.navigate[('cliente/cadastro')]
    }, (error) => {
      window.localStorage.setItem('logado', 'false');
      this.messageService.add({ key: 'msg', severity: 'error', summary: 'Error', detail: error.message, life: 3000 });
    });
  }

}
