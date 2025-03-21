import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private readonly _url = 'http://localhost:5053/api/contatti';
  private readonly _http = inject(HttpClient);

  public getContatti(): Observable<Contact[]> {
    return this._http.get<Contact[]>(this._url);
  }

  public postContatti(contact: Contact): Observable<Contact[]> {
    return this._http.post<Contact[]>(this._url, contact);
  }
}
