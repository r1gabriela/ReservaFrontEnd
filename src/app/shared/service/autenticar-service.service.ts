import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RoleService } from './role.service';
import { Role } from '../role';

@Injectable({
  providedIn: 'root'
})
export class AutenticarServiceService {

  items: MenuItem[];

  auth: boolean;

  role: Role;

  constructor(private roleService: RoleService) { }

  getAuth(){
    return window.localStorage.getItem('logado');
  }

  // setAuth(){
  //   window.localStorage.setItem('logado', 'true');
  // }
}
