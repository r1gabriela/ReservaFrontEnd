import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Reserva } from '../shared/reserva';
import { Pessoa } from '../shared/pessoa';
import { Mesa } from '../shared/mesa';
import { ReservaService } from '../shared/service/reserva.service';
import { MessageService } from 'primeng/api';
import { PessoaService } from '../shared/service/pessoa.service';

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

  constructor(private reservaService: ReservaService, private fb: FormBuilder, private messageService: MessageService, private pessoaService: PessoaService) { }

  ngOnInit(): void {

    this.createForm();

    this.cols = [
      { field: 'pessoa.nome', header: 'Nome' },
      { field: 'data', header: 'Data' }

    ];

  }

  createForm() {
    this.manterReservaForm = this.fb.group({
      'data': new FormControl('', Validators.compose([Validators.required])),
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

}


