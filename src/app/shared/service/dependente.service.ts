import { Dependente } from '../dependente';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Pessoa } from '../pessoa';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DependenteService {

  private SALVAR = 'http://localhost:8080/restaurante/rest/dependente/salvar';
  private EXCLUIR = 'http://localhost:8080/restaurante/rest/dependente/excluir';
  private LISTARPESSOASDECLIENTE = 'http://localhost:8080/restaurante/rest/dependente/listarPessoasDeCliente';
  private LISTARDEPENDENTES = 'http://localhost:8080/restaurante/rest/dependente/listarDependentes';

  constructor(private httpClient: HttpClient) { }

  salvar(dependente: Dependente): Observable<Dependente> {
    return this.httpClient.post<Dependente>(this.SALVAR, dependente).pipe(catchError(this.handleError));
  }

  excluir(dependente: Dependente){
    return this.httpClient.post<Boolean>(this.EXCLUIR, dependente);
  }

  listarPessoasDeCliente() {
    return this.httpClient.get<Pessoa[]>(this.LISTARPESSOASDECLIENTE);
  }

  listarDependentes(){
    return this.httpClient.get<Dependente[]>(this.LISTARDEPENDENTES);
  }

  handleError(error: HttpErrorResponse){
    return throwError(error.error);
  }

}
