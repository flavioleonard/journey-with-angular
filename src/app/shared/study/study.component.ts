import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.scss']
})
export class StudyComponent implements OnInit{
 
  inputProdutor = '';
  constructor(){ }
  //o observable se parece com o promisse mas com algumas mudanças
  //adicionasse um simbolo de dolar na frente da variavel que recebe o obervado. é uma convenção pra dizer que essa é uma variável do tipo observable
  private timer$ = new Observable<string>(sub => {
    setTimeout(() => {
      sub.next("Resolvido") //o sub é como se fosse o resolver da promisse, so que ele precisa do next e voce insere o conteudo dentro do next
      //se eu quiser que o meu observable nao fique na memoria eu chamo o sub.complete() 
    })
  })

  ngOnInit(): void {
    //na promisse a gente usa then, no observable a gente usa o subscribe
    this.timer$
      .subscribe(value => console.log(value))
      //vai me mostrar o conteudo dentro de sub.next() que chega no meu observable  
  }
  //o observable fica na memoria diferente da promise 
}



 // import { Injectable, OnInit } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService implements OnInit{
//   inputProdutor = '';
//   constructor(){ }

//   private timer = new Promise<string>((resolve, reject) => {
//     // resolve e reject são funções e não parametros
//     setTimeout(() => {
//       // depois de 5 segundos eu chamo o medodo resolver que me retorna a string "Resolvido" visto que eu falei que o tipo seria string. Se eu quisesse que ele mandasse um number ou um tipo especifico seria new Promise<number/tipoespecifico> e o resolve(number/tipoespecifico)
//       resolve("Resolvido")
//   }, 5000)
//   })

//   ngOnInit(): void {
//     // quando o componente é inicializado a primeira vez tudo que ta aqui é carregado 
//     this.timer.then(value /*nesse caso o nosso value é o que ta dentro de resolve */ => {
//       // O then é pra puxar o que se espera da promise que nesse caso é o nosso resolver. é o que deu certo
//       console.log(value); //vai mostrar o "Resolvido"
//     })

//   }
// }
