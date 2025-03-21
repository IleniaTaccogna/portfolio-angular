import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Project} from '../models/project';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private readonly _http = inject(HttpClient);
  private readonly _url = "project.json";

  public getProjects(): Observable<Project[]> {
    return this._http.get<Project[]>(this._url);
  }
}
