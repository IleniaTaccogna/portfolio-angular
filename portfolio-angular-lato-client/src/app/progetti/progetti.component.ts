import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Progetto } from '../models/progetto';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-progetti',
  imports: [CardComponent],
  templateUrl: './progetti.component.html',
  styleUrl: './progetti.component.scss'
})
export class ProgettiComponent {

  public listaProgetti: Progetto[] = []
  constructor(private _servizio: ProjectService) {}

  public ngOnInit(): void {
    this._servizio.getProjects().subscribe((servizio) => {
      this.listaProgetti = servizio
      console.log(this.listaProgetti)
    });
  }
}
