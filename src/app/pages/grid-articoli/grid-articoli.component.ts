import { Component, OnInit } from '@angular/core';
import {ArticoliService} from "../../../services/articoli.service";
import {IArticoli} from "../../models/articoli";

@Component({
  selector: 'app-grid-articoli',
  templateUrl: './grid-articoli.component.html',
  styleUrls: ['./grid-articoli.component.css']
})
export class GridArticoliComponent implements OnInit {

  articoli$ : IArticoli[] = [];

  constructor(private articoliService: ArticoliService) { }

  ngOnInit(): void {

    this.articoli$=this.articoliService.getArticoli();
    console.log(this.articoli$);
  }

  handleDelete =  (codart : string) => {
    console.log("Cliccato tasto elimina dell'articolo con codice "+ codart)

    this.articoli$.splice(this.articoli$.findIndex(x => x.codart === codart), 1);
    console.log(this.articoli$)
  }

  handleEdit = (codart : string) => {
    console.log("Cliccato tasto modifica dell'articolo codice " + codart);


  }
}
