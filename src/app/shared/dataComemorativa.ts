import { Pessoa } from './pessoa';
import { Cliente } from './cliente';
import { TipoComemoracao } from './tipoComemoracao';

export class DataComemorativa {
	idDataComemorativa: number = 0;
	pessoa: Pessoa = new Pessoa();
	cliente: Cliente;
	tipoComemoracao: TipoComemoracao;
	dataComemoracao: Date = new Date();
}
