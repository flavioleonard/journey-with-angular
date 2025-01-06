import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit{
  inputProdutor = '';
  constructor(){ }

  private timer = new Promise<string>((resolve, reject) => {
    // resolve e reject são funções e não parametros
    setTimeout(() => {
      // depois de 5 segundos eu chamo o medodo resolver que me retorna a string "Resolvido" visto que eu falei que o tipo seria string. Se eu quisesse que ele mandasse um number ou um tipo especifico seria new Promise<number/tipoespecifico> e o resolve(number/tipoespecifico)
      resolve("Resolvido")
  }, 5000)
  })

  ngOnInit(): void {
    // quando o componente é inicializado a primeira vez tudo que ta aqui é carregado 
    this.timer.then(value /*nesse caso o nosso value é o que ta dentro de resolve */ => {
      // O then é pra puxar o que se espera da promise que nesse caso é o nosso resolver. é o que deu certo
      console.log(value); //vai mostrar o "Resolvido"
    })

  }
}
