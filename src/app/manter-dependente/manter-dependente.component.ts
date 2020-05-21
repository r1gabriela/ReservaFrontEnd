import { Component, OnInit } from '@angular/core';
import { Dependente } from '../shared/dependente';
import { DependenteService } from '../shared/service/dependente.service';
import { Validators,FormControl,FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-manter-dependente',
  templateUrl: './manter-dependente.component.html',
  styleUrls: ['./manter-dependente.component.css']
})
export class ManterDependenteComponent implements OnInit {

  manterDependenteForm: FormGroup;

  displayDialog: boolean;

  selectedDependente: Dependente;

  dependente: Dependente;

  newDependente: boolean;

  dependentes: Dependente[];

  cols: any[];

  constructor(private dependenteService: DependenteService, private fb: FormBuilder) { }

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
    this.displayDialog = false;
    this.dependenteService.salvar(this.dependente).subscribe(dependente => this.dependente = dependente);
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
