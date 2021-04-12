import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{
  heroes: string[] = ['Ironman', 'Thor', 'Spiderman','Hulk'];
  heroeBorrado: string = '';
  borrarHeroe(){
    this.heroeBorrado=this.heroes[this.heroes.length -1] || '';
    this.heroes.pop();
  }
}