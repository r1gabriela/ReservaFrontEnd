import { Mesa } from './../shared/mesa';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manter-mesa',
  templateUrl: './manter-mesa.component.html',
  styleUrls: ['./manter-mesa.component.css']
})
export class ManterMesaComponent implements OnInit {

  displayDialog: boolean;

  selectedMesa: Mesa;

  mesa: Mesa;

  newMesa: boolean;

  mesas: Mesa[];

  cols: any[];

  ngOnInit() {
    this.cols = [
      { field: 'idMesa', header: 'Número' },
      { field: 'capacidade', header: 'Capacidade' },
      { field: 'localizacao', header: 'Localização' },
      { field: 'ativo', header: 'Ativo' }
    ];
  }

  showDialogToAdd() {
    this.newMesa = true;
    this.displayDialog = true;
    this.mesa = new Mesa();
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
