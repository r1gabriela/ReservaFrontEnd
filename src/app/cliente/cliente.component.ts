import { Cliente } from './../shared/cliente'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  displayDialog: boolean;

  selectedCliente: Cliente;

  cliente: Cliente;

  newCliente: boolean;

  clientes: Cliente[];

  cols: any[];

  ngOnInit() {
    this.cols = [
      { field: 'nome', header: 'Nome' },
      { field: 'cpf', header: 'CPF' },
      { field: 'telefone', header: 'Telefone' },
      { field: 'email', header: 'Email' }
    ];
  }

  showDialogToAdd() {
    this.newCliente = true;
    this.displayDialog = true;
    this.cliente= new Cliente();
  }

  save() {
    this.displayDialog = false;
  }

  delete() {
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.displayDialog = true;
  }
}
