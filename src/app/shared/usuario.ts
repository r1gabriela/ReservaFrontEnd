import { Cliente } from './cliente';

export class Usuario extends Cliente{
  idUsuario: number = 0;
  login: string = "";
  senha: string = "";
  ativo: boolean = true;
}
