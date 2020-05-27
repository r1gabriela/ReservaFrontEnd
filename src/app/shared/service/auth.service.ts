import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private USUARIOLOGADO = 'http://localhost:8080/restaurante/rest/usuario/usuarioLogado'

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router, private httpClient: HttpClient) { }

  encontrarUsuario(){
    return this.httpClient.get<Usuario>(this.USUARIOLOGADO)
  }

  mostrarMenu(){
    if(this.encontrarUsuario() != null){
      return this.mostrarMenuEmitter.emit(true);
    } else {
      return this.mostrarMenuEmitter.emit(false);
    }

  }
}
