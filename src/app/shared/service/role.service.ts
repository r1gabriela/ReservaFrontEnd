import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Role } from '../role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private ROLEUSUARIOLOGADO = 'http://localhost:8080/restaurante/rest/role/roleUsuarioLogado';
  private LISTAR = 'http://localhost:8080/restaurante/rest/role/listar';

  constructor(private httpClient: HttpClient) { }

  async roleUsuarioLogado() {
    debugger
    const role = await this.httpClient.get<Role>(this.ROLEUSUARIOLOGADO).toPromise();
    window.localStorage.setItem('role', role.nome);
  }

  listarRole(){
    return this.httpClient.get<Role[]>(this.LISTAR);
  }
}
