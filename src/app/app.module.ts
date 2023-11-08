import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { LoginComponent } from './pages/login/login.component';
import {FormsModule} from "@angular/forms";
import { ErrorComponent } from './pages/error/error.component';
import { ArticoliComponent } from './pages/articoli/articoli.component';
import {CoreModule} from "./core/core.module";
import { LogoutComponent } from './pages/logout/logout.component';
import { GridArticoliComponent } from './pages/grid-articoli/grid-articoli.component';
import { ArticoliCardComponent } from './components/articoli-card/articoli-card.component';

@NgModule({ //modulo principale
  declarations: [ //dichiarati componenti
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ArticoliComponent,
    LogoutComponent,
    GridArticoliComponent,
    ArticoliCardComponent
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
