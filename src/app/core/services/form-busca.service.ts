import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormBuscaService {
  formBusca: FormGroup
  constructor(private httpClient: HttpClient) {
    this.formBusca = new FormGroup({
      
    })
   }
}
