import { Component } from '@angular/core';

@Component({
  selector: 'app-top-widgets',
  templateUrl: './top-widgets.component.html',
  styleUrls: ['./top-widgets.component.scss']
})
export class TopWidgetsComponent {

  rol:string | null;

  constructor(){
    this.rol = localStorage.getItem('rol')
  }
}
