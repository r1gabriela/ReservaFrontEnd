import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Cliente } from '../cliente';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { URLSearchParams } from 'url';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private SALVAR = 'http://localhost:8080/restaurante/rest/cliente/salvar';
  private LISTAR = 'http://localhost:8080/restaurante/rest/cliente/listarTodos';
  private PESQUISAR = 'http://localhost:8080/restaurante/rest/cliente/pesquisar';
  private LISTARPORCPF = 'http://localhost:8080/restaurante/rest/cliente/listarPorCpf';

  constructor(private http: HttpClient) { }

  salvar(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.SALVAR, cliente).pipe(catchError(this.handleError));
  }

  listar() {
    return this.http.get<Cliente[]>(this.LISTAR);
  }

  pesquisar() {
    return this.http.get<Cliente>(this.PESQUISAR);

  }
  handleError(error: HttpErrorResponse) {
    return throwError(error.error)
  }

  listarPorCpf(cpf){
    return this.http.get<Cliente[]>(this.LISTARPORCPF, {
      params: new HttpParams().set('cpf', cpf)});
  }

}
