import { Component, OnInit } from '@angular/core';
import { Dependente } from '../shared/dependente'

@Component({
  selector: 'app-manter-dependente',
  templateUrl: './manter-dependente.component.html',
  styleUrls: ['./manter-dependente.component.css']
})
export class ManterDependenteComponent implements OnInit {

  displayDialog: boolean;

  selectedDependente: Dependente;

  dependente: Dependente;

  newDependente: boolean;

  dependentes: Dependente[];

  cols: any[];

  ngOnInit() {
    this.cols = [
      { field: 'nome', header: 'Nome' },
      { field: 'cpf', header: 'CPF' },
      { field: 'ativo', header: 'Ativo' }
    ];
  }

  showDialogToAdd() {
    this.newDependente = true;
    this.displayDialog = true;
    this.dependente = new Dependente();
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
