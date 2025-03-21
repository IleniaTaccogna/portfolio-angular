import { Component, input } from '@angular/core';
import { Project } from '../models/project';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  public readonly project = input<Project | undefined>();
}
