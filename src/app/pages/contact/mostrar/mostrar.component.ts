import { Component, OnInit } from '@angular/core';
import {Router, Routes} from "@angular/router";
import {EditarComponent} from "../editar/editar.component";

const routes: Routes = [

  {path: 'editar/:id', component:EditarComponent},

];


@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.scss']
})
export class MostrarComponent implements OnInit {

  constructor(private router:Router) {}

    editar(){
      this.router.navigate(["editar"]);
    }


  ngOnInit(): void {
  }

}
