import { Injectable } from '@angular/core';
import { Usuario } from '../usuario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private CADASTRO = 'http://localhost:8080/restaurante/rest/usuario/cadastrar';
  private LOGAR = 'http://localhost:8080/restaurante/rest/usuario/logar';
  private LISTARTODOS = 'http://localhost:8080/restaurante/rest/usuario/listarTodos';
  private EXCLUIR = 'http://localhost:8080/restaurante/rest/usuario/excluir';
  private SALVAR = 'http://localhost:8080/restaurante/rest/usuario/salvar';

  constructor(private httpClient: HttpClient) { }

  cadastrar(usuario: Usuario) {
    return this.httpClient.post<Usuario>(this.CADASTRO, usuario);
  }

  logar(usuario: Usuario){
    return this.httpClient.post<Usuario>(this.LOGAR, usuario);
  }

  listarTodos(){
    return this.httpClient.get<Usuario[]>(this.LISTARTODOS);
  }

  excluir(usuario: Usuario){
    return this.httpClient.post<Boolean>(this.EXCLUIR, usuario);
  }

  salvar(usuario: Usuario){
    return this.httpClient.post<Usuario>(this.SALVAR, usuario);
  }

}
