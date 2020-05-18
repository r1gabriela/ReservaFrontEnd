import { Mesa } from './../shared/mesa';
import { Component, OnInit } from '@angular/core';
import { MesaService } from '../shared/service/mesa.service';

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

  constructor(private mesaService: MesaService){

  }

  ngOnInit() {
    this.cols = [
      { field: 'idMesa', header: 'Número' },
      { field: 'capacidade', header: 'Capacidade' },
      { field: 'localizacao', header: 'Localização' },
      { field: 'ativo', header: 'Ativo' }
    ];
    this.listar();
  }

  showDialogToAdd() {
    this.newMesa = true;
    this.displayDialog = true;
    this.mesa = new Mesa();
  }

  save() {
    this.displayDialog = false;
    this.mesaService.salvar(this.mesa).subscribe(mesa => this.mesa = mesa);
    this.listar();
  }

  delete() {
    this.displayDialog = false;
    this.mesaService.excluir(this.mesa).subscribe(resp => Boolean);
    this.listar();
  }

  onRowSelect(event) {
    this.displayDialog = true;
    this.mesa = event.data;
    this.newMesa = false;
  }

  listar(){
   this.mesaService.listar().subscribe(mesas => this.mesas = mesas);
  }

}
