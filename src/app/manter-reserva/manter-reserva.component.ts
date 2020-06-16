import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Reserva } from '../shared/reserva';
import { Pessoa } from '../shared/pessoa';
import { Mesa } from '../shared/mesa';
import { ReservaService } from '../shared/service/reserva.service';
import { MessageService } from 'primeng/api';
import { PessoaService } from '../shared/service/pessoa.service';
import { MesaService } from '../shared/service/mesa.service';

@Component({
  selector: 'app-manter-reserva',
  templateUrl: './manter-reserva.component.html',
  styleUrls: ['./manter-reserva.component.css']
})
export class ManterReservaComponent implements OnInit {

  manterReservaForm: FormGroup;

  reserva: Reserva;

  displayDialog: boolean;

  cols: any[];

  newReserva: boolean;

  reservas: Reserva[];

  selectedReserva: Reserva;

  pessoa: Pessoa;

  mesas: Mesa[];

  mesa: Mesa;

  constructor(private reservaService: ReservaService, private fb: FormBuilder, private messageService: MessageService, private pessoaService: PessoaService, private mesaService: MesaService) { }

  ngOnInit(): void {

    this.createForm();

    this.cols = [
      { field: 'mesa', subfield: 'localizacao', object: 'true', header: 'Localização da Mesa' },
      { field: 'dataReserva', object: 'false', header: 'Data' },
      { field: 'mesa', subfield: 'capacidade', object: 'true', header: 'Capacidade da Mesa'},
      { field: 'horaEntrada', object: 'false', header: 'Hora da Entrada' }
    ];

    this.listar();
  }

  createForm() {
    this.manterReservaForm = this.fb.group({
      'dataReserva': new FormControl('', Validators.compose([Validators.required])),
      'horaEntrada': new FormControl('', Validators.compose([Validators.required])),
      'horaSaida': new FormControl('', Validators.compose([Validators.required])),
      'capacidade': new FormControl('', Validators.compose([Validators.required])),
      'mesa': new FormControl('', Validators.compose([Validators.required])),
    });
  }

  save() {
    this.reservaService.salvar(this.reserva).subscribe(reserva => {
      this.reserva = reserva;
      this.listar();
      this.messageService.add({ key: 'msg', severity: 'success', summary: 'Reserva', detail: "Operação efetuada com sucesso", life: 3000 });
      this.displayDialog = false;
    }, (error) => {
      this.listar();
      this.messageService.add({ key: 'msg', severity: 'error', summary: 'Error', detail: error.message, life: 3000 });
    });
  }

  delete() {
    this.reservaService.excluir(this.reserva).subscribe(resp => {
      Boolean;
      this.listar();
      this.displayDialog = false;
    });
  }

  listar(){
    this.reservaService.listar().subscribe(reservas => this.reservas = reservas)
  }

  showDialogToAdd() {
    this.newReserva = true;
    this.displayDialog = true;
    this.reserva = new Reserva();
  }

  onRowSelect(event) {
    this.newReserva = false;
    this.reserva = event.data;
    this.displayDialog = true;
  }

  verDisponibilidadeMesa(){
    debugger
    this.mesaService.verDisponibilidadeMesa(this.reserva).subscribe(mesas => this.mesas = mesas)
  }

  habilitarBotaoDisponbilidade(){
    return this.reserva.horaEntrada != null  && this.reserva.horaSaida != null && this.reserva.dataReserva != null && this.reserva.capacidade != null ? false : true
  }
}
