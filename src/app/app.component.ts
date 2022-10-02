import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular_proyectWeb';


    constructor(private router:Router) {}
    listar(){
      this.router.navigate(["listar"]);
    }
    agregar(){
      this.router.navigate(["agregar"]);
    }
    ngOnInit(): void {
    }

  }




