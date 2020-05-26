import { Component, OnInit } from '@angular/core';
import { Dependente } from '../shared/dependente';
import { DependenteService } from '../shared/service/dependente.service';
import { Validators,FormControl,FormGroup,FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-manter-dependente',
  templateUrl: './manter-dependente.component.html',
  styleUrls: ['./manter-dependente.component.css'],
  providers: [MessageService]
})
export class ManterDependenteComponent implements OnInit {

  manterDependenteForm: FormGroup;

  displayDialog: boolean;

  selectedDependente: Dependente;

  dependente: Dependente;

  newDependente: boolean;

  dependentes: Dependente[];

  cols: any[];

  constructor(private dependenteService: DependenteService, private fb: FormBuilder, private messageService: MessageService) { }

  ngOnInit() {
    this.cols = [
      { field: 'nome', header: 'Nome' },
      { field: 'cpf', header: 'CPF' },
      { field: 'ativo', header: 'Ativo' }
    ];

    this.createForm();
  }

  createForm(){
    this.manterDependenteForm = this.fb.group({
      'nome': new FormControl('', Validators.compose([Validators.required, Validators.maxLength(255)])),
      'cpf': new FormControl('', Validators.compose([Validators.required, Validators.pattern(/^\d{11}$/)])),
    });
  }

  showDialogToAdd() {
    this.newDependente = true;
    this.displayDialog = true;
    this.dependente = new Dependente();
  }

  save() {
    this.dependenteService.salvar(this.dependente).subscribe(dependente =>{
      this.dependente = dependente;
      this.displayDialog = false;
      this.messageService.add({ key: 'msg', severity: 'success', summary: 'Dependente', detail: "Operação efetuada com sucesso", life: 3000 });
    }, (error) => {
      this.messageService.add({ key: 'msg', severity: 'error', summary: 'Error', detail: error.message, life: 3000 });
    });
  }

  delete() {
    this.displayDialog = false;
    this.dependenteService.excluir(this.dependente).subscribe(resp => Boolean);
  }

  onRowSelect(event) {
    this.displayDialog = true;
    this.dependente = event.data;
    this.newDependente = false;
  }

}
