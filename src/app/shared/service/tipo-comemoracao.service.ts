import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TipoComemoracao } from '../tipoComemoracao';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TipoComemoracaoService {

  private SALVAR = 'http://localhost:8080/restaurante/rest/tipoComemoracao/salvar';
  private EXCLUIR = 'http://localhost:8080/restaurante/rest/tipoComemoracao/excluir';
  private LISTARTODOS = 'http://localhost:8080/restaurante/rest/tipoComemoracao/listarTodos';
  private LISTARATIVO = 'http://localhost:8080/restaurante/rest/tipoComemoracao/listarPorAtivo';

  constructor(private httpClient: HttpClient) { }

  listarTodos() {
    return this.httpClient.get<TipoComemoracao[]>(`${this.LISTARTODOS}`);
  }

  salvar(tipo: TipoComemoracao): Observable<TipoComemoracao>{
    return this.httpClient.post<TipoComemoracao>(this.SALVAR, tipo).pipe(catchError(this.handleError));
  }

  deletar(tipo: TipoComemoracao) {
    return this.httpClient.post(this.EXCLUIR, tipo);
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error.error);
  }

  listarPorAtivo() {
    return this.httpClient.get<TipoComemoracao[]>(this.LISTARATIVO);
  }
}
