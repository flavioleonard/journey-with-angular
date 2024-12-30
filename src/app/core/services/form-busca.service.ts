import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormBuscaService {
  formBusca: FormGroup
  constructor() {
    this.formBusca = new FormGroup({
      somenteIda: new FormControl(false)
      //o new antes normalmente é pra quando é uma classe. Por exemplo, o meu FormControl é uma classe, pra inicializa-lo eu começo com new
    })
   }
}
