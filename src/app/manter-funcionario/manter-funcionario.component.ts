import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../shared/funcionario';
import { FuncionarioService } from '../shared/service/funcionario.service'

@Component({
  selector: 'app-manter-funcionario',
  templateUrl: './manter-funcionario.component.html',
  styleUrls: ['./manter-funcionario.component.css']
})
export class ManterFuncionarioComponent implements OnInit {

  displayDialog: boolean;

  selectedFuncionario: Funcionario;

  funcionario: Funcionario;

  newFuncionario: boolean;

  funcionarios: Funcionario[];

  cols: any[];

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit() {
    this.cols = [
      { field: 'nome', header: 'Nome' },
      { field: 'cpf', header: 'CPF' },
      { field: 'tipoFuncionario', header: 'Tipo' },
    ];

  this.listarTodos();

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

  salvar(){
    this.funcionarioService.salvar(this.funcionario).subscribe(funcionario => this.funcionario = funcionario);
    this.listarTodos();
  }

  listarTodos(){
    this.funcionarioService.listarTodos().subscribe(resp => this.funcionarios = resp);
  }

}
