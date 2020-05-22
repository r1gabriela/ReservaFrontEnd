import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../shared/funcionario';
import { FuncionarioService } from '../shared/service/funcionario.service'
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
import { TipoFuncionario } from '../shared/tipoFuncionario';

@Component({
  selector: 'app-manter-funcionario',
  templateUrl: './manter-funcionario.component.html',
  styleUrls: ['./manter-funcionario.component.css']
})
export class ManterFuncionarioComponent implements OnInit {

  manterFuncionarioForm: FormGroup;

  displayDialog: boolean;

  selectedFuncionario: Funcionario;

  funcionario: Funcionario;

  newFuncionario: boolean;

  funcionarios: Funcionario[];

  cols: any[];

  constructor(private funcionarioService: FuncionarioService, private fb: FormBuilder) { }

  ngOnInit() {
    this.cols = [
      { field: 'nome', header: 'Nome' },
      { field: 'cpf', header: 'CPF' },
      { field: 'tipoFuncionario', header: 'Tipo' },
    ];

  this.createForm();

  this.listarTodos();

  }

  createForm(){
    this.manterFuncionarioForm = this.fb.group({
      'nome': new FormControl('', Validators.compose([Validators.required, Validators.maxLength(255)])),
      'cpf': new FormControl('', Validators.compose([Validators.required, Validators.pattern(/^\d{11}$/)])),
      'tipo': new FormControl('', Validators.required)
    });
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
