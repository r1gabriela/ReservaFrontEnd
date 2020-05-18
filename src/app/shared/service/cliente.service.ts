import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private SALVAR = 'http://localhost:8080/restaurante/rest/cliente/salvar';
  private LISTAR = 'http://localhost:8080/restaurante/rest/cliente/listarTodos';

  constructor(private http:HttpClient) { }

  salvar(cliente: Cliente){
    return this.http.post<Cliente>(this.SALVAR, cliente);
  }

  listar() {
    return this.http.get<Cliente[]>(this.LISTAR);  
  }

}
