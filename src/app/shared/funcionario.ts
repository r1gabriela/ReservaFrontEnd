import { Pessoa } from './pessoa';
import { TipoFuncionario } from './tipoFuncionario';

export class Funcionario extends Pessoa {
  tipoFuncionario: TipoFuncionario;
}
