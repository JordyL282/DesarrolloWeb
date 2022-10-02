import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms";
import {CrudService} from "../../../service/crud.service";

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {
 formularioContactos:FormGroup;

  constructor(public formulario:FormBuilder,
              private crudService:CrudService) {
    this.formularioContactos = this.formulario.group({
      nombre:[''],
      apellido:[''],
      correo:[''],
      telefono:[''],
      direccion:['']
    });
  }

  ngOnInit(): void {
  }
 EnviarDatos():any{
    console.log("hola mundo");
    console.log(this.formularioContactos.value);
 }
}
