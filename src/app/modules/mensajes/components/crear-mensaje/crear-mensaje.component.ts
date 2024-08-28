import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { MensajesService } from '../../services/mensajes.service';
import { PostMensajeInterface } from 'src/app/interfaces/mensaje.interface';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';

@Component({
  selector: 'app-crear-mensaje',
  templateUrl: './crear-mensaje.component.html',
  styleUrls: ['./crear-mensaje.component.scss']
})
export class CrearMensajeComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();

  mensajeForm!: FormGroup;

  @ViewChild('autosize') autosize !: CdkTextareaAutosize;

  constructor(
    private formBuilder: FormBuilder,
    private mensajeService: MensajesService
  ){

  }

  ngOnInit(): void {
   this.inicializarForms(); 
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
  

  inicializarForms(){
    this.mensajeForm = this.formBuilder.group({
      FK_Id_UsuarioEnvia:this.formBuilder.control('',Validators.required),
      FK_Id_UsuarioRecibe:this.formBuilder.control('',Validators.required),
      SDescripcion:this.formBuilder.control('',Validators.required),
      SSeveridad:this.formBuilder.control('',Validators.required),
      NNumeroRefuerzos:this.formBuilder.control('',Validators.required),
      SFechaMensaje:this.formBuilder.control('',Validators.required),
      STipoMensaje:this.formBuilder.control('',Validators.required)
    })
  }

  postMensaje(){
    if(this.mensajeForm.valid){
      const data: PostMensajeInterface = {
        FK_Id_UsuarioEnvia: this.mensajeForm.get('FK_Id_UsuarioEnvia')?.value,
        FK_Id_UsuarioRecibe:this.mensajeForm.get('FK_Id_UsuarioRecibe')?.value,
        SDescripcion:this.mensajeForm.get('SDescripcion')?.value,
        SSeveridad:this.mensajeForm.get('SSeveridad')?.value,
        NNumeroRefuerzos:this.mensajeForm.get('NNumeroRefuerzos')?.value,
        SFechaMensaje:this.mensajeForm.get('SFechaMensaje')?.value,
        STipoMensaje:this.mensajeForm.get('STipoMensaje')?.value
      }

      this.mensajeService.postMensaje(data)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next:(res) => {

        },
        error: (err) =>{

        }
      })
    }
  }
}
