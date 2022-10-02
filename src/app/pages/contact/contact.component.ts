import { Component, OnInit } from '@angular/core';
import {Router, Routes} from "@angular/router";
import {AgregarComponent} from "./agregar/agregar.component";
import {EditarComponent} from "./editar/editar.component";
import {MostrarComponent} from "./mostrar/mostrar.component";

const routes: Routes = [
  {path: 'editar/:id', component:EditarComponent},
  {path: 'agregar', component:AgregarComponent},
  {path: 'mostrar', component:MostrarComponent},

];
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private router:Router) {}

  agregar(){
    this.router.navigate(["agregar"]);
  }

  mostrar(){
    this.router.navigate(["mostrar"]);
  }

  editar(){
    this.router.navigate(["editar"]);
  }
  ngOnInit(): void {
  }

}
