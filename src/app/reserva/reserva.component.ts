import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ReservaService } from '../shared/service/reserva.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Reserva } from '../shared/reserva';
import { Pessoa } from '../shared/pessoa';
import { PessoaService } from '../shared/service/pessoa.service';
import { Mesa } from '../shared/mesa';
import { MesaService } from '../shared/service/mesa.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {
  reservaForm: FormGroup;

  reserva: Reserva;

  displayDialog: boolean;

  cols: any[];

  newReserva: boolean;

  reservas: Reserva[];

  selectedReserva: Reserva;

  pessoa: Pessoa;

  mesas: Mesa[];

  constructor(private reservaService: ReservaService, private fb: FormBuilder, private messageService: MessageService, private pessoaService: PessoaService, private mesaService: MesaService) { }

  ngOnInit(): void {
    this.createForm();

    this.cols = [
      { field: 'pessoa.nome', header: 'Nome' },
      { field: 'pessoa.cpf', header: 'CPF' },
      { field: 'dataReserva', header: 'Data' }

    ];

  }
  createForm() {
    this.reservaForm = this.fb.group({
      'pessoa': new FormControl('', Validators.compose([Validators.required])),
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
      this.messageService.add({ key: 'msg', severity: 'success', summary: 'Reserva', detail: "Operação efetuada com sucesso", life: 3000 });
    }, (error) => {
      this.messageService.add({ key: 'msg', severity: 'error', summary: 'Error', detail: error.message, life: 3000 });
    });
  }
  delete() {
    this.reservaService.excluir(this.reserva).subscribe(resp => Boolean);
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
  search(event) {
    this.pessoaService.pesquisarPorNome().subscribe(pessoa => {
      this.pessoa = pessoa;
    });
  }

  verDisponibilidadeMesa(){
    this.mesaService.verDisponibilidadeMesa(this.reserva).subscribe(mesas => this.mesas = mesas)
  }
  habilitarBotaoDisponbilidade(){
    return this.reserva.horaEntrada != null  && this.reserva.horaSaida != null && this.reserva.dataReserva != null && this.reserva.capacidade != null ? false : true
  }
}



