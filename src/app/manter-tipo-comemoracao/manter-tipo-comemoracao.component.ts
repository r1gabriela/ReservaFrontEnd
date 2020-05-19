import { Component, OnInit } from '@angular/core';
import { TipoComemoracao } from '../shared/tipoComemoracao';

import { TipoComemoracaoService } from '../shared/service/tipo-comemoracao.service';

@Component({
  selector: 'app-manter-tipo-comemoracao',
  templateUrl: './manter-tipo-comemoracao.component.html',
  styleUrls: ['./manter-tipo-comemoracao.component.css']
})
export class ManterTipoComemoracaoComponent implements OnInit {

  displayDialog: boolean;

  selectedTipo: TipoComemoracao;

  tipo: TipoComemoracao;

  newTipo: boolean;

  tipos: TipoComemoracao[];

  cols: any[];

  constructor(private tipoComemoracaoService: TipoComemoracaoService){ }

  ngOnInit() {
    this.cols = [
      { field: 'descricao', header: 'Descrição' },
      { field: 'ativo', header: 'Ativo' }
    ];
    this.listarTodos();
  }

  showDialogToAdd() {
    this.newTipo = true;
    this.displayDialog = true;
    this.tipo = new TipoComemoracao();
  }

  save() {
    this.displayDialog = false;
    this.tipoComemoracaoService.salvar(this.tipo).subscribe(resp=> this.tipo = resp);
    this.listarTodos();
  }

  delete() {
    this.displayDialog = false;
    this.tipoComemoracaoService.deletar(this.tipo).subscribe(tipo => Boolean);
    this.listarTodos();
  }

  onRowSelect(event) {
    this.newTipo = false;
    this.tipo = event.data;
    this.displayDialog = true;
  }


  listarTodos(){

   this.tipoComemoracaoService.listarTodos().subscribe(tipos =>this.tipos = tipos);

  }

  //save(){
  //  this.salvar();
 // }

}
