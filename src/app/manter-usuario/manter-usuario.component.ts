import { Role } from './../shared/role';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../shared/service/usuario.service';
import { Usuario } from '../shared/usuario';
import { Validators, FormControl, FormGroup, FormBuilder, Form } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-manter-usuario',
  templateUrl: './manter-usuario.component.html',
  styleUrls: ['./manter-usuario.component.css'],
  providers: [MessageService]
})
export class ManterUsuarioComponent implements OnInit {

  manterUsuarioForm: FormGroup;

  displayDialog: boolean;

  selectedUsuario: Usuario;

  usuario: Usuario;

  newUsuario: boolean;

  usuarios: Usuario[];

  roles: Role[];

  cols: any[];

  constructor(private usuarioService: UsuarioService, private fb: FormBuilder, private messageService: MessageService) { }

  ngOnInit(): void {
    this.cols = [
      { field: 'pessoa', subfield: 'nome', object: 'true', header: 'Nome' },
      { field: 'pessoa', subfield: 'cpf', object: 'true', header: 'CPF' },
      { field: 'login', object: 'false', header: 'Login' },
      { field: 'role', subfield: 'nome', object: 'true', header: 'Role' },
      { field: 'ativo', object: 'false', header: 'Ativo' },
    ];
    this.listarTodos();
    this.createForm();
  }

  showDialogToAdd() {
    this.newUsuario = true;
    this.displayDialog = true;
    this.usuario = new Usuario();
  }

  createForm() {
    this.manterUsuarioForm = this.fb.group({
      'senha': new FormControl('', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(16)])),
      'login': new FormControl('', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(8)])),
      'role': new FormControl('', Validators.compose([Validators.required])),
    });
  }

  listarTodos() {
    debugger
    this.usuarioService.listarTodos().subscribe(resp => this.usuarios = resp);
  }

  delete() {
    this.usuarioService.excluir(this.usuario).subscribe(resp => Boolean);
  }

  onRowSelect(event) {
    this.newUsuario = false;
    this.usuario = event.data;
    this.displayDialog = true;
  }

  save() {
    this.usuarioService.salvar(this.usuario).subscribe(usuario => {
      this.usuario = usuario;
      this.messageService.add({ key: 'msg', severity: 'success', summary: 'Usuario', detail: "Operação efetuada com sucesso", life: 3000 });
    }, (error) => {
      this.messageService.add({ key: 'msg', severity: 'error', summary: 'Error', detail: error.message, life: 3000 });
    });
  }
}
