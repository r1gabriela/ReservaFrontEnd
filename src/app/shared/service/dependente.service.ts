import { Dependente } from '../dependente';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pessoa } from '../pessoa';

@Injectable({
  providedIn: 'root'
})
export class DependenteService {

  private SALVAR = 'http://localhost:8080/restaurante/rest/dependente/salvar';
  private EXCLUIR = 'http://localhost:8080/restaurante/rest/dependente/excluir';
  private LISTARPESSOASDECLIENTE = 'http://localhost:8080/restaurante/rest/dependente/listarPessoasDeCliente';

  constructor(private httpClient: HttpClient) { }

  salvar(dependente: Dependente){
    return this.httpClient.post<Dependente>(this.SALVAR, dependente);
  }

  excluir(dependente: Dependente){
    return this.httpClient.post<Boolean>(this.EXCLUIR, dependente);
  }

  listarPessoasDeCliente() {
    return this.httpClient.get<Pessoa[]>(this.LISTARPESSOASDECLIENTE);
  }

}
