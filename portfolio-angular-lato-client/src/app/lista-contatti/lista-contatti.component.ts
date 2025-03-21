import { Component, OnInit } from '@angular/core';
import { ContattiService } from '../service/contatto.service';
import { Contatto } from '../models/contatto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-contatti',
  imports: [CommonModule],
  templateUrl: './lista-contatti.component.html',
  styleUrl: './lista-contatti.component.scss'
})

export class ListaContattiComponent implements OnInit {
  public listaContatti: Contatto[] = []
  constructor(private _servizio: ContattiService) {}
 
  public ngOnInit(): void {
    this._servizio.getContatti().subscribe((risposta) => {
      this.listaContatti = risposta
      console.log(this.listaContatti)
    });
  }
}
