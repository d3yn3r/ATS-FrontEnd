import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterPageComponent {

  camposObligatorios:boolean = false
  registerForm!: FormGroup

  constructor(
    private builder:  FormBuilder,
    private router: Router
  ){
    this.registerForm = this.builder.group({
      SNombre: this.builder.control('',Validators.required),
      SApellido:this.builder.control('',Validators.required),
      SEmail:this.builder.control('',Validators.required),
      STelefono:this.builder.control('',Validators.required),
      SEscuadron:this.builder.control('',Validators.required),
      SNombreAldea:this.builder.control('',Validators.required)
    })
  }

  registrar(){
    if(this.registerForm.valid){
      alert('Solicitud enviada');
      this.camposObligatorios = false;
      this.router.navigate(['/login']);
    }else{
      this.camposObligatorios = true
    }
    
  }

  regresarLogin(){
    this.router.navigate(['/login'])
  }

}