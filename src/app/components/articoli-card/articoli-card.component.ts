import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IArticoli} from "../../models/articoli";


@Component({
  selector: 'app-articoli-card',
  templateUrl: './articoli-card.component.html',
  styleUrls: ['./articoli-card.component.css']
})
export class ArticoliCardComponent implements OnInit {

  constructor() { }

  @Input()
  articolo: IArticoli ={
    codart: '',
    descrizione: '',
    um: '',
    pzcart: 0,
    peso: 0,
    prezzo: 0,
    active: true,
    data: new Date(),
    imageUrl: ''
  }

  @Output()
  delete = new EventEmitter();
  @Output()
  edit = new EventEmitter();

  ngOnInit(): void {
  }

  delArt = () => this.delete.emit(this.articolo.codart);
  //nel momento in cui clicchiamo su tasto elimina, emetteremo l'evento che viene emesso da delete
  //farà scattare l'evento anche dal componente padre

  editArt = () => this.edit.emit(this.articolo.codart);



}
