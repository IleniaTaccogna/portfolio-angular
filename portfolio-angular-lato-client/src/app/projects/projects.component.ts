import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Project } from '../models/project';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-progetti',
  imports: [CardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  public projectList: Project[] = []
  constructor(private _service: ProjectService) {}

  public ngOnInit(): void {
    this._service.getProjects().subscribe((service) => {
      this.projectList = service
      console.log(this.projectList)
    });
  }
}
