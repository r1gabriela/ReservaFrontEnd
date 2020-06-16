import { Mesa } from './../shared/mesa';
import { Component, OnInit } from '@angular/core';
import { MesaService } from '../shared/service/mesa.service';
import { Validators, FormControl, FormGroup, FormBuilder, Form } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-manter-mesa',
  templateUrl: './manter-mesa.component.html',
  styleUrls: ['./manter-mesa.component.css'],
  providers: [MessageService]
})
export class ManterMesaComponent implements OnInit {

  manterMesaForm: FormGroup;

  displayDialog: boolean;

  selectedMesa: Mesa;

  mesa: Mesa;

  newMesa: boolean;

  mesas: Mesa[];

  cols: any[];

  constructor(private mesaService: MesaService, private fb: FormBuilder, private messageService: MessageService) {

  }

  createForm() {
    this.manterMesaForm = this.fb.group({
      'capacidade': new FormControl('', Validators.compose([Validators.required])),
      'localizacao': new FormControl('', Validators.compose([Validators.required, Validators.maxLength(255)])),
    });
  }

  ngOnInit() {
    this.cols = [
      { field: 'idMesa', header: 'Número' },
      { field: 'capacidade', header: 'Capacidade' },
      { field: 'localizacao', header: 'Localização' },
      { field: 'ativo', header: 'Ativo' }
    ];
    this.listar();

    this.createForm();
  }

  showDialogToAdd() {
    this.newMesa = true;
    this.displayDialog = true;
    this.mesa = new Mesa();
  }

  save() {
    this.mesaService.salvar(this.mesa).subscribe(mesa => {
    this.mesa = mesa
    this.displayDialog = false;
    this.listar();
    });
  }

  delete() {
    this.displayDialog = false;
    this.mesaService.excluir(this.mesa).subscribe(resp => {
      Boolean;
    this.listar();
    });
  }

  onRowSelect(event) {
    this.displayDialog = true;
    this.mesa = event.data;
    this.newMesa = false;
  }

  listar() {
    this.mesaService.listar().subscribe(mesas => this.mesas = mesas);
  }

}
