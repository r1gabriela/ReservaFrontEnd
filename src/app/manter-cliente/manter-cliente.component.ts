import { Cliente } from '../shared/cliente';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../shared/service/cliente.service';

@Component({
  selector: 'app-manter-cliente',
  templateUrl: './manter-cliente.component.html',
  styleUrls: ['./manter-cliente.component.css']
})
export class ManterClienteComponent implements OnInit {
  displayDialog: boolean;

  selectedCliente: Cliente;

  cliente: Cliente;

  newCliente: boolean;

  clientes: Cliente[];

  cols: any[];

  constructor(private clienteService: ClienteService){}

  ngOnInit() {
    this.cols = [
      { field: 'nome', header: 'Nome' },
      { field: 'cpf', header: 'CPF' },
      { field: 'telefone', header: 'Telefone' },
      { field: 'email', header: 'Email' }
    ];

    this.listarTodos();
  }

  showDialogToAdd() {
    this.newCliente = true;
    this.displayDialog = true;
    this.cliente= new Cliente();
  }

  save() {
    this.displayDialog = false;
    this.clienteService.salvar(this.cliente).subscribe(resp => this.cliente = resp)
  }

  delete() {
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.displayDialog = true;
  }

  listarTodos(){
    this.clienteService.listar().subscribe(resp => this.clientes = resp);
  }
}
