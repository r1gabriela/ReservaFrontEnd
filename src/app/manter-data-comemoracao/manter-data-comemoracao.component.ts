import { Component, OnInit } from '@angular/core';
import { DataComemorativa } from '../shared/dataComemorativa';
import { DataComemorativaService } from '../shared/service/dataComemorativa.service';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { TipoComemoracao } from '../shared/tipoComemoracao'
import { TipoComemoracaoService } from '../shared/service/tipo-comemoracao.service'
import { DependenteService } from '../shared/service/dependente.service'
import { Pessoa } from '../shared/pessoa';

@Component({
  selector: 'app-manter-data-comemoracao',
  templateUrl: './manter-data-comemoracao.component.html',
  styleUrls: ['./manter-data-comemoracao.component.css']
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

  constructor(private dataComemorativaService: DataComemorativaService, private fb: FormBuilder, private tipoComemoracaoService: TipoComemoracaoService, private dependenteService: DependenteService) { }

  ngOnInit() {
    this.cols = [
      { field: 'nome', header: 'Nome' },
      { field: 'nomeTipo', header: 'Tipo' },
      { field: 'dataComemoracao', header: 'Data' }
    ];

    this.listar();

    this.listarTipoComemoracao();

    this.createForm();

    this.listarPessoasDeCliente();
  }

  createForm(){
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
    this.displayDialog = false;
    this.dataComemorativaService.salvar(this.dataComemoracao).subscribe(resp => this.dataComemoracao = resp)
    this.listar();

  }

  delete() {
    this.displayDialog = false;
    this.listar();
  }

  onRowSelect(event) {
    this.displayDialog = true;
  }

  listar(){
    this.dataComemorativaService.listar().subscribe(datas => this.datas = datas);
  }

  listarTipoComemoracao(){
    this.tipoComemoracaoService.listarPorAtivo().subscribe(tipos => this.tipos = tipos)
  }

  listarPessoasDeCliente(){
    this.dependenteService.listarPessoasDeCliente().subscribe(pessoa => this.pessoas = pessoa);
  }

}



