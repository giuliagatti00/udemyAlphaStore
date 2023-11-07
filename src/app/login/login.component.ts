import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId: string = "Giulia";
  password: string ="";

  autenticato: boolean = true;

  errMsg: string = "Spiacente, dati errati!";


  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  gestAuth = () : void => {
    console.log(this.userId);

    if (this.userId === "Giulia" && this.password === "123_Stella") {
      this.route.navigate(['welcome',this.userId]) //navigare ad un altro componente
      this.autenticato = true;
    } else {
      this.autenticato = false;
    }
  }
}



