import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RoleService } from '../shared/service/role.service';
import { Role } from '../shared/role';
import { UsuarioService } from '../shared/service/usuario.service';

declare const $: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  role: Role = new Role();

  itemsCliente: MenuItem[];

  itemsFuncionario: MenuItem[];

  constructor(private roleService: RoleService, private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.itemsCliente = [
      {
        label: 'Datas Comemorativas',
        routerLink: ['/dataComemorativa/manter'],
        icon: 'pi pi-pw pi-calendar'
      },
      {
        label: 'Dependentes',
        routerLink: ['/dependente/manter'],
        icon: 'pi pi-pw pi-users'
      },
      {
        label: 'Reservas',
        routerLink: ['/reserva/manter'],
        icon: 'pi pi-pw pi-bookmark'
      },
      {
        label: 'Cliente',
        routerLink: ['/cliente/cadastro'],
        icon: 'pi pi-pw pi-id-card'
      },
      {
        label: 'Logout',
        command: (event) => {
          this.logout();
        },
        routerLink: ['/login'],
        icon: 'pi pi-pw pi-sign-out'
      }
    ];
    this.itemsFuncionario = [
      {
        label: 'Mesas',
        routerLink: ['/mesa/manter'],
        icon: 'pi pi-pw pi-ticket'
      },
      {
        label: 'Tipos de comemoração',
        routerLink: ['/tipoComemoracao/manter'],
        icon: 'pi pi-pw pi-heart'
      },
      {
        label: 'Clientes',
        routerLink: ['/cliente/manter'],
        icon: 'pi pi-pw pi-user'
      },
      {
        label: 'Funcionários',
        routerLink: ['/funcionario/manter'],
        icon: 'pi pi-pw pi-user'
      },
      {
        label: 'Usuários',
        routerLink: ['/usuario/manter'],
        icon: 'pi pi-pw pi-id-card'
      },
      {
        label: 'Logout',
        command: (event) => {
          this.logout();
        },
        routerLink: ['/login'],
        icon: 'pi pi-pw pi-sign-out'
      }
    ];
  }

  preencherMenu() {
    this.role.nome = window.localStorage.getItem('role');
  }

  isMobileMenu() {
    if ($(window).width() > 995) {
      return false;
    }
    return true;
  };

  logout(){
    this.usuarioService.logout();
    window.localStorage.setItem('logado', 'false');
  }

}
