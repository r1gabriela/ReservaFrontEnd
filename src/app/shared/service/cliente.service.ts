import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Cliente } from '../cliente';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private SALVAR = 'http://localhost:8080/restaurante/rest/cliente/salvar';
  private LISTAR = 'http://localhost:8080/restaurante/rest/cliente/listarTodos';

  constructor(private http: HttpClient) { }

  salvar(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.SALVAR, cliente).pipe(catchError(this.handleError));
  }

  listar() {
    return this.http.get<Cliente[]>(this.LISTAR);
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error.error)
  }

}
