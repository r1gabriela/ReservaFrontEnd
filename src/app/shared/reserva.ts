import { Mesa } from './mesa'
import { Cliente } from './cliente'
import { Pessoa } from './pessoa'
import { Time } from '@angular/common';

export class Reserva {
  idReserva: number = 0;
  data: Date = new Date();
  ativo: boolean;
  cliente: Cliente;
  mesa: Mesa = new Mesa();
  pessoa: Pessoa;
  horaEntrada: Time;
  horaSaida: Time;
  capacidade: number
}
