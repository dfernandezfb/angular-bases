import { Component } from '@angular/core'

@Component({
  selector: 'app-contador',
  template: `
    <h1>Contador App</h1>
<h3>La base es: {{base}}</h3>
<!-- <button (click)="numero=numero+1;">+1</button> -->
<button (click)="sumar(base)">+{{base}}</button>

<span>{{numero}}</span>

<!-- <button (click)="numero=numero-1">-1</button> -->
<button (click)="sumar(-base)">-{{base}}</button>

<!-- SE ACONSEJA HACER LA LOGICA EN EL COMPONENT, NO ACA EN EL TEMPLATE-->

    `
})
export class ContadorComponent {
  title: string = 'bases';
  numero: number = 10;
  base: number = 5;

  sumar(valor: number) {
    this.numero += valor;
  }

}