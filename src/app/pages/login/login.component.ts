import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthappService} from "../../../services/authapp.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId: string = "";
  password: string ="";

  autenticato: boolean = true;

  errMsg: string = "Spiacente, dati errati!";

  titolo: string = "Accesso & Autenticazione";
  sottotitolo: string = "Procedi ad inserire username e password.";

  constructor(private route: Router, private basicAuth: AuthappService) { }

  ngOnInit(): void {
  }

  gestAuth = () : void => {
    console.log(this.userId);

    if (this.basicAuth.autentica(this.userId, this.password)) {
      this.route.navigate(['welcome',this.userId]) //navigare(carica) ad un altro componente
      this.autenticato = true;
    } else {
      this.autenticato = false;
    }
  }
}



