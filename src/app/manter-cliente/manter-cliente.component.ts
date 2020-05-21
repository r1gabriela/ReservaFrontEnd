import { Cliente } from '../shared/cliente';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../shared/service/cliente.service';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-manter-cliente',
  templateUrl: './manter-cliente.component.html',
  styleUrls: ['./manter-cliente.component.css']
})
export class ManterClienteComponent implements OnInit {

  manterClienteForm: FormGroup;

  displayDialog: boolean;

  selectedCliente: Cliente;

  cliente: Cliente;

  newCliente: boolean;

  clientes: Cliente[];

  cols: any[];

  constructor(private clienteService: ClienteService, private fb: FormBuilder) { }

  ngOnInit() {
    this.cols = [
      { field: 'nome', header: 'Nome' },
      { field: 'cpf', header: 'CPF' },
      { field: 'telefone', header: 'Telefone' },
      { field: 'email', header: 'Email' }
    ];

    this.createForm();

    this.listarTodos();
  }

  createForm(){
    this.manterClienteForm = this.fb.group({
      'nome': new FormControl('', Validators.compose([Validators.required, Validators.maxLength(255)])),
      'cpf': new FormControl('', Validators.compose([Validators.required, Validators.pattern(/^\d{11}$/)])),
      'email': new FormControl('', Validators.compose([Validators.required, Validators.maxLength(255), Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)])),
      'telefone': new FormControl('', Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern(/^\d{11}$/)]))
    });
  }

  showDialogToAdd() {
    this.newCliente = true;
    this.displayDialog = true;
    this.cliente = new Cliente();
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

  listarTodos() {
    this.clienteService.listar().subscribe(resp => this.clientes = resp);
  }
}
