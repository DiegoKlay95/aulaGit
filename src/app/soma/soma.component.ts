import {Component} from '@angular/core'


@Component({
   selector: 'soma-component'
  ,templateUrl:'soma.component.html'
  ,styleUrls:['soma.component.css']
})
export class SomaComponent{
numero1: number = 0;
numero2: number = 0;
numero3: number = 0;
numero4: number = 0;
numero5: number = 0;

  somar(): void {
    let total = this.numero1 + this.numero2;
    alert('A soma é: '+total);
  }

  par(): void{
    let resultado = '';
    if (this.numero3 % 2 == 0){
    resultado='Par';
  }else{
    resultado='Ímpar';
  }
  alert(resultado);
  }

  positivo(): void{
    let resultado: string = 'Positivo';
    if (Number(this.numero4) < 0){
      resultado ='Negativo';
    }
    alert(resultado);
  }

  parPositivo(): void{
    let num: number = Number(this.numero5);
    if(num % 2 ==0 && num>=0){
      alert('Par e Positivo');
    }else{
      alert('Não é Par ou Positivo');
    }
  }

}
