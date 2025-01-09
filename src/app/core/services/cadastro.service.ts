import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PessoaUsuaria } from '../types/type';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  cadastrar(pessoaUsuaria: PessoaUsuaria): Observable<PessoaUsuaria> {
    return this.http.post<PessoaUsuaria>(`${this.apiUrl}/auth/cadastro`, pessoaUsuaria);
  }
  buscarCadastro(token: string): Observable<PessoaUsuaria> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<PessoaUsuaria>(`${this.apiUrl}/auth/perfil`, {headers});
    //método pra buscar os dados do usuário pra página de perfil. Esse método buscar o usuário baseado no seu token. A rota exige que seja passado o headers como authorização 
  }

  editarCadastro(pessoaUsuaria: PessoaUsuaria, token: string): Observable<PessoaUsuaria> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.patch<PessoaUsuaria>(`${this.apiUrl}/auth/perfil`, pessoaUsuaria, {headers});
    //método de mudança de dados do usuário passando o novo body com os dados do tipo PessoaUsuaria e seus campos com suas respectivas mudanças. Passar o headers como authorization tb 
  }
  
}
