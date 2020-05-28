import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private ROLEUSUARIOLOGADO = 'http://localhost:8080/restaurante/rest/role/roleUsuarioLogado'

  constructor(private httpClient: HttpClient) { }

  roleUsuarioLogado(){
    return this.httpClient.get<String>(this.ROLEUSUARIOLOGADO);
  }
}
