import { Injectable } from '@angular/core';
import { Usuario } from '../usuario';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Pessoa } from '../pessoa';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private CADASTRO = 'http://localhost:8080/restaurante/rest/usuario/cadastrar';
  private LOGAR = 'http://localhost:8080/restaurante/rest/usuario/logar';
  private LISTARTODOS = 'http://localhost:8080/restaurante/rest/usuario/listarTodos';
  private EXCLUIR = 'http://localhost:8080/restaurante/rest/usuario/excluir';
  private SALVAR = 'http://localhost:8080/restaurante/rest/usuario/salvar';
  private LOGOUT = 'http://localhost:8080/restaurante/rest/logout';
  private LISTARPORCPF = 'http://localhost:8080/restaurante/rest/pessoa/listarNaoCadastradoPorCpf';

  constructor(private httpClient: HttpClient) { }

  cadastrar(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.post<Usuario>(this.CADASTRO, usuario).pipe(catchError(this.handleError));
  }

  logar(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.post<Usuario>(this.LOGAR, usuario).pipe(catchError(this.handleError));
  }

  listarTodos() {
    return this.httpClient.get<Usuario[]>(this.LISTARTODOS);
  }

  excluir(usuario: Usuario) {
    return this.httpClient.post<Boolean>(this.EXCLUIR, usuario);
  }

  salvar(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.post<Usuario>(this.SALVAR, usuario).pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error.error);
  }

  logout(){
    return this.httpClient.get<Usuario>(this.LOGOUT);
  }
  listarPorCpf(cpf){
    return this.httpClient.get<Pessoa[]>(this.LISTARPORCPF, {
      params: new HttpParams().set('cpf', cpf)});
  }
}
