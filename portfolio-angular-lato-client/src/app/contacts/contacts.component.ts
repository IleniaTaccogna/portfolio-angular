import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from '../service/contact.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contatti',
  imports: [ ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {
  private readonly _formContactBuilder = inject(FormBuilder);
  private readonly _service = inject(ContactService);
  public contactsForm: FormGroup;


 constructor() { 
   this.contactsForm= this._formContactBuilder.nonNullable.group({
     name:['',[Validators.required, Validators.minLength(3),Validators.pattern(/^[a-zA-ZÀ-ÿ\s]+$/), Validators.maxLength(30)]],
     email:['',[Validators.required, Validators.email, Validators.pattern(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)]],
     message:['',[Validators.required, Validators.minLength(10)]]
   });
  }

  onSubmit(){
    this._service.postContatti(this.contactsForm.value).subscribe((_service) => {
      console.log(_service)
    });
    console.log("Funzioma tutto?");
  }
}
