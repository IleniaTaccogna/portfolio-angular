import { Component, OnInit } from '@angular/core';
import { ContactService } from '../service/contact.service';
import { Contact } from '../models/contact';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacts-list',
  imports: [CommonModule],
  templateUrl: './contacts-list.component.html',
  styleUrl: './contacts-list.component.scss'
})

export class ContactsListComponent implements OnInit {
  public  contactList: Contact[] = []
  constructor(private _service: ContactService) {}
 
  public ngOnInit(): void {
    this._service.getContatti().subscribe((response) => {
      this.contactList = response
      console.log(this.contactList)
    });
  }
}
