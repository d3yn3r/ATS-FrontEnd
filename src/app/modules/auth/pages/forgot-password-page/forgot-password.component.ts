import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordPageComponent {

  camposObligatorios:boolean = false;
  forgotPasswordForm !: FormGroup

  constructor (
    private builder: FormBuilder,
    private router: Router
  ){
    this.forgotPasswordForm = this.builder.group({
      SEmail: this.builder.control('',Validators.required)
    }) 
  }

  recuperarPass(){
    if(this.forgotPasswordForm.valid){
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
