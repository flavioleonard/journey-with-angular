import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Promocao } from '../types/type';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PromocaoService {
  private apiURL: string = environment.apiURL

  constructor(
    private httpClient: HttpClient
  ) { }
  listar(): Observable<Promocao[]>{
    // criando o metodo listar que vai retornar um observable com um array do tipo Promocao
    return this.httpClient.get<Promocao[]>(`${this.apiURL}/promocoes`)

  }
}
