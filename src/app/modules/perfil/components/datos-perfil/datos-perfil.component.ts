import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DatosUsuarioService } from '../../services/datosUsuario.service';
import { Subject, take, takeUntil } from 'rxjs';
import { GetUsuarioInterface } from 'src/app/interfaces/usuarioInterface';

@Component({
  selector: 'app-datos-perfil',
  templateUrl: './datos-perfil.component.html',
  styleUrls: ['./datos-perfil.component.scss']
})
export class DatosPerfilComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>()

  userProfileForm!: FormGroup;
  isEditable = false;
  originalValues: any;
  originalPhoto: any;
  PK_Id_Usuario: string | null = localStorage.getItem('PK_Id_Usuario');
  datosUsuario !: GetUsuarioInterface;
  currentPhoto: string = '../../../../../assets/img/profile/1.png';
  tempPhoto: string  = '../../../../../assets/img/profile/1.png';
 
  @ViewChild('fileInput') fileInput!: ElementRef;

  constructor(
    private fb: FormBuilder,
    private datosUsuarioService: DatosUsuarioService
  ) { }

  ngOnInit(): void {
    this.inicializarForm();
    this.obtenerDatosUsuario();
    this.originalValues = this.userProfileForm.getRawValue();
    
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  toggleEdit(): void {
    this.isEditable = !this.isEditable;

    if (this.isEditable) {
      this.userProfileForm.get('name')?.enable();
      this.userProfileForm.get('village')?.enable();
      this.userProfileForm.get('email')?.enable();
      this.userProfileForm.get('phone')?.enable();
    } else {
      this.userProfileForm.get('name')?.disable();
      this.userProfileForm.get('village')?.disable();
      this.userProfileForm.get('email')?.disable();
      this.userProfileForm.get('phone')?.disable();
    }
  }

  inicializarForm() {
      this.userProfileForm = this.fb.group({
        name: [{ value: '', disabled: true }],
        village: [{ value: '', disabled: true }],
        email: [{ value: '', disabled: true }],
        phone: [{ value: '', disabled: true }],
        role: [{ value: '', disabled: true }],
        balance: [{ value: '', disabled: true }]
      });


  }

  obtenerDatosUsuario(){
    this.datosUsuarioService.getDatosUsuario(this.PK_Id_Usuario != null ? parseInt(this.PK_Id_Usuario, 10) : 0)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (res) => {
          this.datosUsuario = res[0];
          this.userProfileForm.patchValue({
            name: `${this.datosUsuario.SNombre} ${this.datosUsuario.SApellido}`,
            village: this.datosUsuario.SNombreAldea,
            email: this.datosUsuario.SEmail,
            phone: this.datosUsuario.STelefono,
            role: this.datosUsuario.rol,
            balance: this.datosUsuario.NSaldo
          });
          this.originalValues = this.userProfileForm.getRawValue();
        }
      });
  }

  saveChanges(): void {
    this.originalValues = this.userProfileForm.getRawValue();
    this.isEditable = !this.isEditable;
    this.currentPhoto = this.tempPhoto;
  }

  cancelChanges(): void {
    this.toggleEdit();
    this.userProfileForm.reset(this.originalValues);
    this.tempPhoto = this.currentPhoto;
  }

  triggerFileInput(): void {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = () => {
          if (image.width <= 180 && image.height <= 180) {
            this.tempPhoto = e.target.result;
          } else {
            alert('La foto debe tener un tamaño máximo de 180x180 píxeles.');
          }
        };
      };
      reader.readAsDataURL(file);
    }
  }

}
