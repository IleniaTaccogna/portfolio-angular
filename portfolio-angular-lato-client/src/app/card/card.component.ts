import { Component, input } from '@angular/core';
import { Progetto } from '../models/progetto';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  public readonly progetto = input<Progetto | undefined>();
}
