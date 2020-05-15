import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Funcionario } from '../funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private SALVAR = 'http://localhost:8080/restaurante/rest/funcionario/salvar';
  private LISTARTODOS = 'http://localhost:8080/restaurante/rest/funcionario/listarTodos';

  constructor(private httpClient: HttpClient) { }

  salvar(funcionario: Funcionario){
    return this.httpClient.post<Funcionario>(this.SALVAR, funcionario);
  }

  listarTodos(){
    return this.httpClient.get<Funcionario[]>(this.LISTARTODOS);
  }

}
