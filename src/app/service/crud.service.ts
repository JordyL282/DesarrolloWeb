import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Empleado} from "./Empleado"

@Injectable({
  providedIn: 'root'
})
export class CrudService {
API: string='http://localhost/empleados/';
  constructor(private clienteHttp:HttpClient) {}


  }

