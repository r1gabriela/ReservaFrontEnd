import { Component, OnInit } from '@angular/core';
import { DataComemorativa } from '../shared/dataComemorativa';
import { DataComemorativaService } from '../shared/service/dataComemorativa.service';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { TipoComemoracao } from '../shared/tipoComemoracao'
import { TipoComemoracaoService } from '../shared/service/tipo-comemoracao.service'
import { DependenteService } from '../shared/service/dependente.service'
import { Pessoa } from '../shared/pessoa';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-manter-data-comemoracao',
  templateUrl: './manter-data-comemoracao.component.html',
  styleUrls: ['./manter-data-comemoracao.component.css'],
  providers: [MessageService]
})
export class ManterDataComemoracaoComponent implements OnInit {

  pessoas: Pessoa[];

  tipos: TipoComemoracao[];

  manterDataComemorativaForm: FormGroup;

  displayDialog: boolean;

  selectedData: DataComemorativa;

  dataComemoracao: DataComemorativa;

  newData: boolean;

  datas: DataComemorativa[];

  cols: any[];

  constructor(private dataComemorativaService: DataComemorativaService, private fb: FormBuilder,
    private tipoComemoracaoService: TipoComemoracaoService,
    private dependenteService: DependenteService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.cols = [
      { field: 'pessoa', subfield: 'nome', object: 'true', header: 'Nome' },
      { field: 'tipoComemoracao', subfield: 'descricao', object: 'true', header: 'Tipo' },
      { field: 'dataComemoracao', object: 'false', header: 'Data' }
    ];

    this.listar();

    this.listarTipoComemoracao();

    this.createForm();

    this.listarPessoasDeCliente();
  }

  createForm() {
    this.manterDataComemorativaForm = this.fb.group({
      'nome': new FormControl('', Validators.compose([Validators.required, Validators.maxLength(255)])),
      'data': new FormControl('', Validators.required),
      'tipoComemoracao': new FormControl('', Validators.required)
    });
  }

  showDialogToAdd() {
    this.newData = true;
    this.displayDialog = true;
    this.dataComemoracao = new DataComemorativa();
  }

  save() {
    this.dataComemorativaService.salvar(this.dataComemoracao).subscribe(resp => {
      this.dataComemoracao = resp;
      this.displayDialog = false;
      this.listar();
      this.messageService.add({ key: 'msg', severity: 'success', summary: 'Data Comemoração', detail: "Operação efetuada com sucesso", life: 3000 });
    }, (error) => {
      this.listar();
      this.messageService.add({ key: 'msg', severity: 'error', summary: 'Error', detail: error.message, life: 3000 });
    });
  }


  delete() {
    this.dataComemorativaService.excluir(this.dataComemoracao).subscribe(resp => {
      this.displayDialog = false;
      this.listar();
    })
 
  }

  onRowSelect(event) {
    this.displayDialog = true;
  }

  listar() {
    debugger
    this.dataComemorativaService.listar().subscribe(datas => this.datas = datas);
  }

  listarTipoComemoracao() {
    this.tipoComemoracaoService.listarPorAtivo().subscribe(tipos => this.tipos = tipos)
  }

  listarPessoasDeCliente() {
    this.dependenteService.listarPessoasDeCliente().subscribe(pessoa => this.pessoas = pessoa);
  }

}



