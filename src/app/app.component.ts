import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {   AuthConfig , OAuthService, NullValidationHandler } from 'angular-oauth2-oidc';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular_proyectWeb';



    constructor(private router:Router, private oauthService: OAuthService) {
      this.configure();
    }
    listar(){
      this.router.navigate(["listar"]);
    }
    agregar(){
      this.router.navigate(["agregar"]);
    }
    ngOnInit(): void {
    }


  authConfig: AuthConfig = {
    issuer: 'http://localhost:8080/auth/realms/prograweb/',
    redirectUri: window.location.origin,
    clientId: 'frontend',
    responseType: 'code',
    scope: 'openid profile email offline_access',
    showDebugInformation: true,
  };

  configure(): void {
    this.oauthService.configure(this.authConfig);
    this.oauthService.tokenValidationHandler = new NullValidationHandler();
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.loadDiscoveryDocument().then(() => this.oauthService.tryLogin())

        }
        login():void{
          this.oauthService.initImplicitFlowInternal()

        }

        logout():void{
          this.oauthService.logOut()
        }
  }





