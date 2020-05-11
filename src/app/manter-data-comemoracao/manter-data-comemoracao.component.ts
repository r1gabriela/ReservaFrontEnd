import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataComemorativa } from '../shared/dataComemorativa';

@Component({
  selector: 'app-manter-data-comemoracao',
  templateUrl: './manter-data-comemoracao.component.html',
  styleUrls: ['./manter-data-comemoracao.component.css']
})
export class ManterDataComemoracaoComponent implements OnInit {
  dataComemorativa: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm(new DataComemorativa());
  }

  createForm(dataComemorativa: DataComemorativa) {
    this.dataComemorativa = this.formBuilder.group({
      idDataComemorativa: [dataComemorativa.idDataComemorativa],
      IdPessoa: [dataComemorativa.IdPessoa],
      idCliente: [dataComemorativa.idCliente],
      idTipoComemoracao: [dataComemorativa.idTipoComemoracao],
      dataComemoracao: [dataComemorativa.dataComemoracao]
    });
  }
}


