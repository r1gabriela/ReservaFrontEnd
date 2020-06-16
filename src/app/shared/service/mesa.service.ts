import { Injectable } from '@angular/core';
import { Mesa } from '../mesa';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Reserva } from '../reserva';

@Injectable({
  providedIn: 'root'
})
export class MesaService {

  private SALVAR = 'http://localhost:8080/restaurante/rest/mesa/salvar';
  private EXCLUIR = 'http://localhost:8080/restaurante/rest/mesa/excluir';
  private LISTAR = 'http://localhost:8080/restaurante/rest/mesa/listarTodos';
  private VERDISPONIBILIDADEMESA = "http://localhost:8080/restaurante/rest/mesa/verDisponibilidadeMesa";

  constructor(private httpClient: HttpClient) { }

  salvar(mesa: Mesa) {
    return this.httpClient.post<Mesa>(this.SALVAR, mesa);
  }

  listar() {
    return this.httpClient.get<Mesa[]>(this.LISTAR);
  }

  excluir(mesa: Mesa) {
    return this.httpClient.post<Boolean>(this.EXCLUIR, mesa);
  }

  verDisponibilidadeMesa(reserva: Reserva){
    return this.httpClient.post<Mesa[]>(this.VERDISPONIBILIDADEMESA, reserva);
  }
}
