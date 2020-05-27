import { Pessoa } from './pessoa';
import { Role } from './role';

export class Usuario {
  idUsuario: number = 0;
  pessoa: Pessoa = new Pessoa();
  login: String;
  senha: string = "";
  role: Role = new Role();
  ativo: boolean = true;
}
