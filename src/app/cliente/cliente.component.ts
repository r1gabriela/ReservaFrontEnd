import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ClienteService } from '../shared/service/cliente.service';
import { Cliente } from '../shared/cliente';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
  providers: [MessageService]
})
export class ClienteComponent implements OnInit {

  clienteForm: FormGroup;

  cliente: Cliente = new Cliente();

  constructor(private clienteService: ClienteService, private fb: FormBuilder, private messageService: MessageService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.clienteForm = this.fb.group({
      'nome': new FormControl('', Validators.compose([Validators.required, Validators.maxLength(255)])),
      'cpf': new FormControl('', Validators.compose([Validators.required])),
      'email': new FormControl('', Validators.compose([Validators.required, Validators.maxLength(255), Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)])),
      'telefone': new FormControl('', Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern(/^\d{11}$/)]))
    });
  }

  save() {
    this.clienteService.salvar(this.cliente).subscribe(resp => {
      this.cliente = resp;
      this.messageService.add({ key: 'msg', severity: 'success', summary: 'Cliente', detail: "Operação efetuada com sucesso", life: 3000 });
    }, (error) => {
      this.messageService.add({ key: 'msg', severity: 'error', summary: 'Error', detail: error.message, life: 3000 });
    });
  }
}

