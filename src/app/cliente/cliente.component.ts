import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ClienteService } from '../shared/service/cliente.service';
import { Cliente } from '../shared/cliente';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clienteForm: FormGroup;

  cliente: Cliente = new Cliente();

  constructor(private clienteService: ClienteService, private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.clienteForm = this.fb.group({
      'nome': new FormControl('', Validators.compose([Validators.required, Validators.maxLength(255)])),
      'cpf': new FormControl('', Validators.compose([Validators.required, Validators.pattern(/^\d{11}$/)])),
      'email': new FormControl('', Validators.compose([Validators.required, Validators.maxLength(255), Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)])),
      'telefone': new FormControl('', Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern(/^\d{11}$/)]))
    });
  }

  save() {
    this.clienteService.salvar(this.cliente).subscribe(resp => this.cliente = resp)
  }
}
