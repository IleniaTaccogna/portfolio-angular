import { Component } from '@angular/core';

@Component({
  selector: 'app-chi-siamo',
  imports: [],
  templateUrl: './about-as.component.html',
  styleUrls: ['./about-as.component.scss']
})
export class  AboutAsComponent {
  // photoZullo="/FototesseraZullo.png";
  // photoTaccogna="/FototesseraTaccogna.png";

protected readonly person=[{
  fullName:"Federico Zullo",
  description:"Ciao, mi chiamo Federico Zullo e sono un appassionato di codice e design. Trasformo idee in interfacce intuitive e performanti. Specializzato in sviluppo frontend, lavoro con tecnologie moderne per creare esperienze utente fluide e accattivanti. Sempre alla ricerca di nuove sfide, unisco estetica e funzionalità per portare il web a un livello superiore.",
  photo:"FototesseraZullo.png",
 },
 {
  fullName:"Ilenia Taccogna",
  description:" Ciao, mi chiamo Ilenia Taccogna e ho 23 anni. Sono una frontend developer e adoro il mio lavoro. La tecnologia e il design mi appassionano da sempre, e ho scelto di dedicarmi alla creazione di esperienze web che siano non solo funzionali, ma anche esteticamente piacevoli. Ogni giorno cerco di migliorarmi, imparando nuove tecnologie e perfezionando le mie competenze per offrire il meglio.",
  photo:"FototesseraTaccogna.png",
 }
  ]
}

