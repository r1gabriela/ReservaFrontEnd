import { Component, OnInit } from '@angular/core';
import { DataComemorativa } from '../shared/dataComemorativa';

@Component({
  selector: 'app-manter-data-comemoracao',
  templateUrl: './manter-data-comemoracao.component.html',
  styleUrls: ['./manter-data-comemoracao.component.css']
})
export class ManterDataComemoracaoComponent implements OnInit {
  displayDialog: boolean;

  selectedData: DataComemorativa;

  dataComemoracao: DataComemorativa;

  newData: boolean;

  datas: DataComemorativa[];

  cols: any[];

  ngOnInit() {
    this.cols = [
      { field: 'nome', header: 'Nome' },
      { field: 'nomeTipo', header: 'Tipo' },
      { field: 'dataComemoracao', header: 'Data' }
    ];
  }

  showDialogToAdd() {
    this.newData = true;
    this.displayDialog = true;
    this.dataComemoracao = new DataComemorativa();
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


