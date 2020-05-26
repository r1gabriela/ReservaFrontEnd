import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Funcionario } from '../funcionario';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private SALVAR = 'http://localhost:8080/restaurante/rest/funcionario/salvar';
  private LISTARTODOS = 'http://localhost:8080/restaurante/rest/funcionario/listarTodos';

  constructor(private httpClient: HttpClient) { }

  salvar(funcionario: Funcionario): Observable<Funcionario>{
    return this.httpClient.post<Funcionario>(this.SALVAR, funcionario).pipe(catchError(this.handleError));
  }

  listarTodos(){
    return this.httpClient.get<Funcionario[]>(this.LISTARTODOS);
  }

  handleError(error:HttpErrorResponse){
    return throwError(error.error);
  }

}
