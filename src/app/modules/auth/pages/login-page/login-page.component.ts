import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { LoginInterface } from 'src/app/interfaces/loginInterface';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  private unsubscribe$ = new Subject<void>();
  loginForm: FormGroup;
  loading: boolean = false;

  constructor(
    private builder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private spinner: NgxSpinnerService
  ){
    this.loginForm = this.builder.group({
      sEmail: this.builder.control('', [Validators.required, Validators.email]),
      sHashedPassword: this.builder.control('',Validators.required),
      sAccessToken: this.builder.control('')
    });
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  login(): void {
    const data: LoginInterface = {
      sEmail: this.loginForm.get('sEmail')?.value,
      sHashedPassword: this.loginForm.get('sHashedPassword')?.value,
      sAccessToken: this.loginForm.get('sAccessToken')?.value
    };

    if (this.loginForm.valid) {
      this.spinner.show()

      this.authService.Login(data).pipe(
        takeUntil(this.unsubscribe$)
      ).subscribe({
        next:(res) =>{
          localStorage.setItem('token', res[0].token);
          localStorage.setItem('rol', res[0].rol);
          localStorage.setItem('PK_Id_Usuario', res[0].PK_Id_Usuario.toString())
          this.router.navigate(['/misiones']);
        },
        error:(error) =>{
          alert('inicio de sesión fallido')
          this.loading = false;
          this.spinner.hide();
        },
        complete:()=>{
          this.loading = false;
          this.spinner.hide();
        }
      });
        
    }
  }

}
