import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TipoComemoracao } from '../shared/tipoComemoracao';

@Injectable({
  providedIn: 'root'
})
export class TipoComemoracaoService {

  private SALVAR = 'http://localhost:8080/restaurante/rest/tipoComemoracao/salvar';
  private EXCLUIR = 'http://localhost:8080/restaurante/rest/tipoComemoracao/excluir';
  private LISTARTODOS = 'http://localhost:8080/restaurante/rest/tipoComemoracao/listarTodos';

  constructor(private httpClient: HttpClient) { }

  listarTodos() {
    return this.httpClient.get<TipoComemoracao[]>(`${this.LISTARTODOS}`);
  }

  salvar(tipo: TipoComemoracao) {
    return this.httpClient.post<TipoComemoracao>(this.SALVAR, tipo);
  }

  deletar(tipo : TipoComemoracao) {
    return this.httpClient.post(this.EXCLUIR, tipo);
  }
}
