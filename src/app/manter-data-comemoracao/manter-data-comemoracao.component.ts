import { Component, OnInit } from '@angular/core';
import { DataComemorativa } from '../shared/dataComemorativa';
import { DataComemorativaService } from '../shared/service/dataComemorativa.service';

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

  constructor(private dataComemorativaService: DataComemorativaService){

  }

  ngOnInit() {
    this.cols = [
      { field: 'nome', header: 'Nome' },
      { field: 'nomeTipo', header: 'Tipo' },
      { field: 'dataComemoracao', header: 'Data' }
    ];

    this.listar();
  }

  showDialogToAdd() {
    this.newData = true;
    this.displayDialog = true;
    this.dataComemoracao = new DataComemorativa();
  }

  save() {
    this.displayDialog = false;
    this.dataComemorativaService.salvar(this.dataComemoracao).subscribe(resp => this.dataComemoracao = resp)
    this.listar();

  }

  delete() {
    this.displayDialog = false;
    this.listar();
  }

  onRowSelect(event) {
    this.displayDialog = true;
  }

  listar(){
    this.dataComemorativaService.listar().subscribe(datas => this.datas = datas);
  }

}



