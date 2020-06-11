import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pessoa } from '../pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private PESQUISARPORNOME = 'http://localhost:8080/restaurante/rest/pessoa/pesquisarPorNome';

  constructor(private httpClient: HttpClient) { }

  pesquisarPorNome() {
    return this.httpClient.get<Pessoa>(this.PESQUISARPORNOME);
  }
}

