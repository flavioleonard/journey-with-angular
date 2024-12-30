import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Promocao } from '../types/type';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PromocaoService {

  private apiURL: string = environment.apiURL;

  constructor(
    private httpClient: HttpClient
  ) { }

  listar () : Observable<Promocao[]> {
    return this.httpClient.get<Promocao[]>(`${this.apiURL}/promocoes`)
  }
  // AQUI EU FAÇO A MINHA REQUISIÇÃO DE LISTAR QUE VAI PODER SER USADA POR TODA A APLICAÇÃO
}