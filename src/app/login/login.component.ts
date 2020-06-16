import { Component, OnInit } from '@angular/core';
import { Usuario } from '../shared/usuario';
import { UsuarioService } from '../shared/service/usuario.service'
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { MenuComponent } from '../menu/menu.component';
import { RoleService } from '../shared/service/role.service';
import { Role } from '../shared/role';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  role: Role;

  loginForm: FormGroup;

  usuario: Usuario = new Usuario();

  constructor(private usuarioService: UsuarioService, private fb: FormBuilder,
    private router: Router, private messageService: MessageService,
    private menuComponent: MenuComponent, private roleService: RoleService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      'senha': new FormControl('', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(16)])),
      'login': new FormControl('', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(8)]))
    });
  }

  logar() {
    this.usuarioService.logar(this.usuario).subscribe(usuario => {
      this.usuario = usuario;
      window.localStorage.setItem('logado', 'true');
      this.roleService.roleUsuarioLogado();
      this.menuComponent.preencherMenu();
      this.router.navigate(['reserva/manter']);
 }, (error) => {
    window.localStorage.setItem('logado', 'false');
      this.messageService.add({ key: 'msg', severity: 'error', summary: 'Error', detail: "Falha ao logar, usuário ou senha incorretos", life: 3000 });
    });

  }

}
