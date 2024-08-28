import { Component } from '@angular/core';

@Component({
  selector: 'app-reportes-page',
  templateUrl: './reportes-page.component.html',
  styleUrls: ['./reportes-page.component.scss']
})
export class ReportesPageComponent {

  rol: string | null;

  constructor()
  {
    this.rol = localStorage.getItem('rol')
  }

}
