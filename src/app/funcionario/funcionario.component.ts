import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../shared/funcionario';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {

  displayDialog: boolean;

  selectedFuncionario: Funcionario;

  funcionario: Funcionario;

  newFuncionario: boolean;

  funcionarios: Funcionario[];

  cols: any[];

  ngOnInit() {
    this.cols = [
      { field: 'nome', header: 'Nome' },
      { field: 'cpf', header: 'CPF' },
      { field: 'tipoFuncionario', header: 'Tipo' },
    ];
  }

  showDialogToAdd() {
    this.newFuncionario = true;
    this.displayDialog = true;
    this.funcionario = new Funcionario();
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
