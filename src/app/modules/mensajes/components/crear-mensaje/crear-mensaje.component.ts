import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalSimpleComponent } from 'src/app/shared/modal-simple/modal-simple.component';

@Component({
  selector: 'app-crear-mensaje',
  templateUrl: './crear-mensaje.component.html',
  styleUrls: ['./crear-mensaje.component.scss']
})
export class CrearMensajeComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();

  mensajeForm!: FormGroup;
  noDatos!: boolean;

  @ViewChild('autosize') autosize !: CdkTextareaAutosize;

  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private ref: MatDialogRef<CrearMensajeComponent>
  ) {

  }

  ngOnInit(): void {
    this.inicializarForms();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  inicializarForms() {
    this.mensajeForm = this.formBuilder.group({
      FK_Id_UsuarioRecibe: this.formBuilder.control('', Validators.required),
      SDescripcion: this.formBuilder.control('', Validators.required),
      SSeveridad: this.formBuilder.control('', Validators.required),
      NNumeroRefuerzos: this.formBuilder.control('', Validators.required),
      STipoMensaje: this.formBuilder.control('', Validators.required)
    })
  }

  postMensaje() {
    if (this.mensajeForm.valid) {
      const data = {
        FK_Id_UsuarioEnvia: 1,
        FK_Id_UsuarioRecibe: this.mensajeForm.get('FK_Id_UsuarioRecibe')?.value,
        SDescripcion: this.mensajeForm.get('SDescripcion')?.value,
        SSeveridad: this.mensajeForm.get('SSeveridad')?.value,
        NNumeroRefuerzos: this.mensajeForm.get('NNumeroRefuerzos')?.value,
        SFechaMensaje: '',
        STipoMensaje: this.mensajeForm.get('STipoMensaje')?.value
      }

      this.ref.close();
      this.dialog.open(ModalSimpleComponent, {
        width: "42%",
        height: "42%",
        data: {
          titulo: 'Mensaje Enviado',
          mensaje: `El mensaje ha sido enviado correctamente`
        }
      })
    }else{
      this.noDatos = true;
    }
  }
}
