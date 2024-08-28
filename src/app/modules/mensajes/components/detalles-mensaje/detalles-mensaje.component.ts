import { Component, OnInit } from '@angular/core';
import { GetMensajeInterface } from 'src/app/interfaces/mensaje.interface';
import { MensajesService } from '../../services/mensajes.service';

@Component({
  selector: 'app-detalles-mensaje',
  templateUrl: './detalles-mensaje.component.html',
  styleUrls: ['./detalles-mensaje.component.scss']
})
export class DetallesMensajeComponent implements OnInit{

  mensaje !:GetMensajeInterface;
  noMensaje : string =''
  constructor(
    private mensajeService: MensajesService
  ){

  }

  ngOnInit(): void {
    this.obtenerMensaje();
  }

  private obtenerMensaje(){
    this.mensajeService.mensajeSeleccionado$.subscribe(mensaje => {
      if (mensaje) {
        this.mensaje = mensaje;
        this.noMensaje = '';
      } else {
        this.noMensaje = 'No ha seleccionado un mensaje'
      }
    });
    
  }

}
