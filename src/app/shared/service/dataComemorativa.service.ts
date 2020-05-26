import { Injectable } from '@angular/core';
import { DataComemorativa } from '../dataComemorativa';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataComemorativaService {

  private SALVAR = 'http://localhost:8080/restaurante/rest/dataComemorativa/salvar';
  private EXCLUIR = 'http://localhost:8080/restaurante/rest/dataComemorativa/excluir';
  private LISTAR = 'http://localhost:8080/restaurante/rest/dataComemorativa/listar';

  constructor(private httpClient: HttpClient) { }

  salvar(dataComemorativa: DataComemorativa): Observable <DataComemorativa> {
    return this.httpClient.post<DataComemorativa>(this.SALVAR, dataComemorativa).pipe(catchError(this.handleError));
  }

  listar(){
    return this.httpClient.get<DataComemorativa[]>(this.LISTAR);
  }

  excluir(dataComemorativa: DataComemorativa){
    return this.httpClient.post<Boolean>(this.EXCLUIR, dataComemorativa);
  }

  handleError(error: HttpErrorResponse){
    return throwError(error.error);
  }

}
