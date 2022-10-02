import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {MenuComponent} from "./pages/menu/menu.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {AboutComponent} from "./pages/about/about.component";
import {EditarComponent} from "./pages/contact/editar/editar.component";
import {AgregarComponent} from "./pages/contact/agregar/agregar.component";
import {MostrarComponent} from "./pages/contact/mostrar/mostrar.component";

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'menu', component:MenuComponent},
  {path: 'home', component:HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'editar', component:EditarComponent},
  {path: 'agregar', component:AgregarComponent},
  {path: 'mostrar', component:MostrarComponent},
  {path: 'contact', component:ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
