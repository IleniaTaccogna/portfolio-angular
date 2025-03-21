import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContattiService } from '../service/contatto.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contatti',
  imports: [ ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './contatti.component.html',
  styleUrl: './contatti.component.scss'
})
export class ContattiComponent {
  private readonly _formContactBuilder = inject(FormBuilder);
  private readonly _servizio = inject(ContattiService);
  public contattiForm: FormGroup;


 constructor() { 
   this.contattiForm= this._formContactBuilder.nonNullable.group({
     name:['',[Validators.required, Validators.minLength(3),Validators.pattern(/^[a-zA-ZÀ-ÿ\s]+$/), Validators.maxLength(30)]],
     email:['',[Validators.required, Validators.email, Validators.pattern(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)]],
     message:['',[Validators.required, Validators.minLength(10)]]
   });
  }

  onSubmit(){
    this._servizio.postContatti(this.contattiForm.value).subscribe((servizio) => {
      console.log(servizio)
    });
    console.log("Funzioma tutto?");
  }
}
