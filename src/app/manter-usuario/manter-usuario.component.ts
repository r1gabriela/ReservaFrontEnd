import { Role } from './../shared/role';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../shared/service/usuario.service';
import { Usuario } from '../shared/usuario';
import { Validators, FormControl, FormGroup, FormBuilder, Form } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { RoleService } from '../shared/service/role.service';
import { Pessoa } from '../shared/pessoa';

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

  pessoas: Pessoa[];

  roles: Role[];

  cols: any[];

  constructor(private usuarioService: UsuarioService, private fb: FormBuilder,
     private messageService: MessageService,
     private roleService: RoleService) { }

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
    this.listarRole()
  }

  showDialogToAdd() {
    this.newUsuario = true;
    this.displayDialog = true;
    this.usuario = new Usuario();
  }

  createForm() {
    this.manterUsuarioForm = this.fb.group({
      'pessoa': new FormControl('', Validators.compose([Validators.required])),
      'login': new FormControl('', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(8)])),
      'senha': new FormControl('', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(16)])),
      'role': new FormControl('', Validators.compose([Validators.required])),
    });
  }

  listarTodos() {
    this.usuarioService.listarTodos().subscribe(resp => this.usuarios = resp);
  }

  delete() {
    this.usuarioService.excluir(this.usuario).subscribe(resp => {
      Boolean;
      this.listarTodos;
    });
  }

  onRowSelect(event) {
    this.newUsuario = false;
    this.usuario = event.data;
    this.displayDialog = true;
  }

  search(event) {
    this.usuarioService.listarPorCpf(event.query).subscribe(resp => this.pessoas = resp);
  }

  save() {
    this.usuarioService.salvar(this.usuario).subscribe(usuario => {
      this.usuario = usuario;
      this.listarTodos;
      this.displayDialog = false;
      this.messageService.add({ key: 'msg', severity: 'success', summary: 'Usuario', detail: "Operação efetuada com sucesso", life: 3000 });
    }, (error) => {
      this.listarTodos;
      this.messageService.add({ key: 'msg', severity: 'error', summary: 'Error', detail: error.message, life: 3000 });
    });
  }

  listarRole(){
    this.roleService.listarRole().subscribe(roles => this.roles = roles);
  }
}
