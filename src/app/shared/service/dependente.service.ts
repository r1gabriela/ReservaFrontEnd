import { Dependente } from '../dependente';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DependenteService {

  private SALVAR = 'http://localhost:8080/restaurante/rest/dependente/salvar';
  private EXCLUIR = 'http://localhost:8080/restaurante/rest/dependente/excluir';

  constructor(private httpClient: HttpClient, private httpParams: HttpParams) { }

  salvar(dependente: Dependente){
    return this.httpClient.post<Dependente>(this.SALVAR, dependente);
  }

  excluir(dependente: Dependente){
    return this.httpClient.post<Boolean>(this.EXCLUIR, dependente);
  }

}
