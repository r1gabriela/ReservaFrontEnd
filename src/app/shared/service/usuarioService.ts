import { Injectable } from '@angular/core';
import { Usuario } from '../usuario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private CADASTRO = 'http://localhost:8080/restaurante/rest/usuario/cadastrar';
  private LOGAR = 'http://localhost:8080/restaurante/rest/usuario/logar';

  constructor(private httpClient: HttpClient) { }

  cadastrar(usuario: Usuario) {
    return this.httpClient.post<Usuario>(this.CADASTRO, usuario);
  }

  logar(usuario: Usuario){
    debugger
    return this.httpClient.post<Usuario>(this.LOGAR, usuario);
  }

}
