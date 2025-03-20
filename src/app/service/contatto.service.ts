import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contatto } from '../models/contatto';


@Injectable({
  providedIn: 'root'
})
export class ContattiService {
private readonly _url = 'http://localhost:5053/api/contatti';
private readonly _http = inject(HttpClient);

public getContatti(): Observable<Contatto[]> {
  return this._http.get<Contatto[]>(this._url);
}

public postContatti(contatto:Contatto): Observable<Contatto[]> {
  return this._http.post<Contatto[]>(this._url, contatto);
}
}
