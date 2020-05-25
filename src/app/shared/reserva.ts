import { Mesa } from './mesa'
import { Cliente } from './cliente'
import { Pessoa } from './pessoa'

export class Reserva {
  idReserva: number = 0;
  data: Date = new Date();
  ativo: boolean;
  cliente: Cliente;
  mesa: Mesa;
  pessoa: Pessoa;
}
