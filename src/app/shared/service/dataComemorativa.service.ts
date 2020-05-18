import { Injectable } from '@angular/core';
import { DataComemorativa } from '../dataComemorativa';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataComemorativaService {

  private SALVAR = 'http://localhost:8080/restaurante/rest/dataComemorativa/salvar';
  private EXCLUIR = 'http://localhost:8080/restaurante/rest/dataComemorativa/excluir';
  private LISTAR = 'http://localhost:8080/restaurante/rest/dataComemorativa/listarTodos';

  constructor(private httpClient: HttpClient) { }

  salvar(dataComemorativa: DataComemorativa){
    return this.httpClient.post<DataComemorativa>(this.SALVAR, dataComemorativa);
  }

  listar(){
    return this.httpClient.get<DataComemorativa[]>(this.LISTAR);
  }

  excluir(dataComemorativa: DataComemorativa){
    return this.httpClient.post<Boolean>(this.EXCLUIR, dataComemorativa);
  }

}
