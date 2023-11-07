import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import { ErrorComponent } from './error/error.component';
import { ArticoliComponent } from './articoli/articoli.component';
import {CoreModule} from "./core/core.module";

@NgModule({ //modulo principale
  declarations: [ //dichiarati componenti
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ArticoliComponent
  ],
  imports: [ //e moduli feature importati
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent] //componente che viene avviato all'avvio del modulo
})
export class AppModule { }

//flow di avvio dell'applicazione main.ts avvia appmodule che lancia appcomponent lezione 24
