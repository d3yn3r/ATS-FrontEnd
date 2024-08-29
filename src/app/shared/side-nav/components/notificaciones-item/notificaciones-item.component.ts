import { Component, OnInit } from '@angular/core';
import { GetNotificacionInterface } from 'src/app/interfaces/notificacion.interface';
import { NotificacionService } from '../../services/notificaciones.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-notificaciones-item',
  templateUrl: './notificaciones-item.component.html',
  styleUrls: ['./notificaciones-item.component.scss']
})
export class NotificacionesItemComponent implements OnInit {
 
  private unsubscribe$ = new Subject<void>();

  notificacionesList!:GetNotificacionInterface[];
  notificacionesLength:number = 0;
  userId: string | null = localStorage.getItem('PK_Id_Usuario');
  constructor(
    private notificacionService: NotificacionService
  )
  {

  }

  ngOnInit(): void {
      this.getNotifaciones();
  }

  NgOnDestroy():void{
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private getNotifaciones(){
    this.notificacionService.getNotificaciones(this.userId != null ? parseInt(this.userId,10): 0)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe({
      next:(res) => {
        this.notificacionesList = res;
        this.notificacionesLength = this.notificacionesList.length;
      },
      error:(err) =>{
        alert("ha ocurrido un error al obtener las notificaciones")
      },
      complete:() =>{
        
      }
    })

  }

}
