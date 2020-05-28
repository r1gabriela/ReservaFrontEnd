import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RoleService } from '../shared/service/role.service';

declare const $: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  role: String;

  items: MenuItem[];

  constructor(private roleService: RoleService) {}

  ngOnInit() {

    this.roleService.roleUsuarioLogado().subscribe(role => this.role = role);

    this.items = [
      {
        label: 'Datas Comemorativas',
        visible: this.role == "cliente" ? true : false,
        routerLink: ['/dataComemorativa/manter'],
        icon: 'pi pi-pw pi-calendar'
      },
      {
        label: 'Dependentes',
        visible: this.role == "cliente" ? true : false,
        routerLink: ['/dependente/manter'],
        icon: 'pi pi-pw pi-users'
      },
      // {
      //   label: 'Reservas',
      //   visible: this.role == "cliente" ? true : false,
      //   routerLink: ['/reservas/manter'],
      //   icon: 'pi pi-pw pi-bookmark'
      // },
      {
        label: 'Mesas',
        visible: this.role == "funcionario" ? true : false,
        routerLink: ['/mesa/manter'],
        icon: 'pi pi-pw pi-ticket'
      },
      {
        label: 'Tipos de comemoração',
        visible: this.role == "funcionario" ? true : false,
        routerLink: ['/tipoComemoracao/manter'],
        icon: 'pi pi-pw pi-heart'
      },
      {
        label: 'Clientes',
        visible: this.role == "funcionario" ? true : false,
        routerLink: ['/cliente/manter'],
        icon: 'pi pi-pw pi-user'
      },
      {
        label: 'Funcionários',
        visible: this.role == "funcionario" ? true : false,
        routerLink: ['/funcionario/manter'],
        icon: 'pi pi-pw pi-user'
      },
      {
        label: 'Usuários',
        visible: this.role == "funcionario" ? true : false,
        routerLink: ['/usuario/manter'],
        icon: 'pi pi-pw pi-id-card'
      },
    ];
  }

  isMobileMenu() {
    if ($(window).width() > 995) {
      return false;
    }
    return true;
  };

}
