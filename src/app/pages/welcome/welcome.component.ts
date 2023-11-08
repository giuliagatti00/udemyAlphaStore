import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  utente: string = "";

  titolo: string = "Benevenuti in AlphaShop";
  sottotitolo: string = "Visualizza le offerte del giorno";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void { //primo elemento che viene lanciato alla creazione del componente

    this.utente = this.route.snapshot.params['userid'];
  }

}
