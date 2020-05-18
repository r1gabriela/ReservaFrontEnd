import { Injectable } from '@angular/core';
import { Mesa } from '../mesa';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MesaService {

  private SALVAR = 'http://localhost:8080/restaurante/rest/mesa/salvar';
  private EXCLUIR = 'http://localhost:8080/restaurante/rest/mesa/excluir';
  private LISTAR = 'http://localhost:8080/restaurante/rest/mesa/listarTodos';

  constructor(private httpClient: HttpClient) { }

  salvar(mesa: Mesa){
    return this.httpClient.post<Mesa>(this.SALVAR, mesa);
  }

  listar(){
    return this.httpClient.get<Mesa[]>(this.LISTAR);
  }

  excluir(mesa: Mesa){
    return this.httpClient.post<Boolean>(this.EXCLUIR, mesa);
  }

}
