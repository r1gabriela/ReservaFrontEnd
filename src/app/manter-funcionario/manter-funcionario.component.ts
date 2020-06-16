import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../shared/funcionario';
import { FuncionarioService } from '../shared/service/funcionario.service'
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { TipoFuncionario } from '../shared/tipoFuncionario';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-manter-funcionario',
  templateUrl: './manter-funcionario.component.html',
  styleUrls: ['./manter-funcionario.component.css'],
  providers: [MessageService]
})
export class ManterFuncionarioComponent implements OnInit {

  manterFuncionarioForm: FormGroup;

  displayDialog: boolean;

  selectedFuncionario: Funcionario;

  funcionario: Funcionario;

  newFuncionario: boolean;

  funcionarios: Funcionario[];

  cols: any[];

  constructor(private funcionarioService: FuncionarioService, private fb: FormBuilder, private messageService: MessageService) { }

  ngOnInit() {
    this.cols = [
      { field: 'nome', object: 'false', header: 'Nome' },
      { field: 'cpf', object: 'false', header: 'CPF' },
      { field: 'tipoFuncionario', subfiel: 'descricao', object: 'true', header: 'Tipo' },
    ];

    this.createForm();
    this.listarTodos();
  }

  createForm() {
    this.manterFuncionarioForm = this.fb.group({
      'nome': new FormControl('', Validators.compose([Validators.required, Validators.maxLength(255)])),
      'cpf': new FormControl('', Validators.compose([Validators.required])),
      'tipo': new FormControl('', Validators.required)
    });
  }

  showDialogToAdd() {
    this.newFuncionario = true;
    this.displayDialog = true;
    this.funcionario = new Funcionario();
  }

  delete() {
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.displayDialog = true;
    this.funcionario = event.data;
    this.newFuncionario = false;
  }

  salvar() {
    this.displayDialog = false;
    this.funcionarioService.salvar(this.funcionario).subscribe(funcionario => {
      this.funcionario = funcionario;
      this.messageService.add({ key: 'msg', severity: 'success', summary: 'Funcionario', detail: "Operação efetuada com sucesso", life: 3000 });
      this.listarTodos();
    }, (error) => {
      this.messageService.add({ key: 'msg', severity: 'error', summary: 'Error', detail: error.message, life: 3000 });
    });
  }

  listarTodos() {
    this.funcionarioService.listarTodos().subscribe(resp => this.funcionarios = resp);
  }

}
