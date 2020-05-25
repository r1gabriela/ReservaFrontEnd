import { Injectable } from '@angular/core';
import { Reserva } from '../reserva';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  private SALVAR = 'http://localhost:8080/restaurante/rest/reserva/salvar';
  private EXCLUIR = 'http://localhost:8080/restaurante/rest/reserva/excluir';

  constructor(private httpClient: HttpClient) { }

  salvar(reserva: Reserva){
    return this.httpClient.post<Reserva>(this.SALVAR, reserva);
  }

  excluir(reserva: Reserva){
    return this.httpClient.post<Boolean>(this.EXCLUIR, reserva);
  }
}
