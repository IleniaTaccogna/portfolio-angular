import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Progetto } from '../models/progetto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private readonly _http = inject(HttpClient);

  private readonly _url = "/../../project.json";

  public getProjects(): Observable<Progetto[]> {
    return this._http.get<Progetto[]>(this._url);
  }
}
