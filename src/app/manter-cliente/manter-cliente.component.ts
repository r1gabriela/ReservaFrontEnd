import { Cliente } from '../shared/cliente';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../shared/service/cliente.service';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-manter-cliente',
  templateUrl: './manter-cliente.component.html',
  styleUrls: ['./manter-cliente.component.css'],
  providers: [MessageService],
})
export class ManterClienteComponent implements OnInit {

  manterClienteForm: FormGroup;

  displayDialog: boolean;

  selectedCliente: Cliente;

  cliente: Cliente;

  newCliente: boolean;

  clientes: Cliente[];

  cols: any[];

  constructor(private clienteService: ClienteService, private fb: FormBuilder, private messageService: MessageService) { }

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

  createForm() {
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
    this.clienteService.salvar(this.cliente).subscribe(resp => {
      this.cliente = resp;
      this.displayDialog = false;
      this.listarTodos();
      this.messageService.add({ key: 'msg', severity: 'success', summary: 'Tipo Comemoração', detail: "Operação efetuada com sucesso", life: 3000 });
    }, (error) => {
      this.messageService.add({ key: 'msg', severity: 'error', summary: 'Error', detail: error.message, life: 3000 });
    });
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
