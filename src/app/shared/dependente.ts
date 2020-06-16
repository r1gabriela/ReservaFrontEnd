import { Pessoa } from './pessoa';
import { Cliente } from './cliente';

export class Dependente extends Pessoa {
  cliente: Cliente = new Cliente();
  ativo: Boolean;
}
