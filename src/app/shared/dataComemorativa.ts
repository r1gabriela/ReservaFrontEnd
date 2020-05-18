import { Pessoa } from './pessoa';
import { Cliente } from './cliente';
import { TipoComemoracao } from './tipoComemoracao';

export class DataComemorativa {
	idDataComemorativa: number = 0;
	pessoa: Pessoa = new Pessoa();
	cliente: Cliente = new Cliente();
	tipoComemoracao: TipoComemoracao = new TipoComemoracao();
	dataComemoracao: Date = new Date();
}
