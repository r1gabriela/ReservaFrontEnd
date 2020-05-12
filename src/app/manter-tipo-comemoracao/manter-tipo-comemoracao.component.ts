import { Component, OnInit } from '@angular/core';
import { TipoComemoracao } from '../shared/tipoComemoracao';

@Component({
  selector: 'app-manter-tipo-comemoracao',
  templateUrl: './manter-tipo-comemoracao.component.html',
  styleUrls: ['./manter-tipo-comemoracao.component.css']
})
export class ManterTipoComemoracaoComponent implements OnInit {

  displayDialog: boolean;

  selectedTipo: TipoComemoracao;

  tipo: TipoComemoracao;

  newTipo: boolean;

  tipos: TipoComemoracao[];

  cols: any[];

  ngOnInit() {
    this.cols = [
      { field: 'descricao', header: 'Descrição' },
      { field: 'ativo', header: 'Ativo' }
    ];
  }

  showDialogToAdd() {
    this.newTipo = true;
    this.displayDialog = true;
    this.tipo = new TipoComemoracao();
  }

  save() {
    this.displayDialog = false;
  }

  delete() {
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.displayDialog = true;
  }

}
