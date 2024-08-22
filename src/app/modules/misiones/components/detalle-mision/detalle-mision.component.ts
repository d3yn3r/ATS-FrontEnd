import { Component, inject } from '@angular/core';
import { ModalRevisarMisionComponent } from '../modal-revisar-mision/modal-revisar-mision.component';

@Component({
  selector: 'app-detalle-mision',
  templateUrl: './detalle-mision.component.html',
  styleUrls: ['./detalle-mision.component.scss']
})
export class DetalleMisionComponent {

  datosMision = inject(ModalRevisarMisionComponent);
  rolUsuario = localStorage.getItem('rol');
  inputdata = this.datosMision.inputdata;
  componente = this.datosMision.componente;
}
