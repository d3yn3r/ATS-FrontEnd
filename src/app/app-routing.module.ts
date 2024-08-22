import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './modules/auth/pages/login-page/login-page.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { RegisterPageComponent } from './modules/auth/pages/register-page/register.component';
import { ConfiguracionesPageComponent } from './modules/configuraciones/pages/configuraciones-page/configuraciones-page.component';
import { ForgotPasswordPageComponent } from './modules/auth/pages/forgot-password-page/forgot-password.component';
import { authGuard } from './core/guards/auth.guard';
import { DashboardPageComponent } from './modules/dashboard/pages/dashboard-page/dashboard-page.component';
import { CrearMisionPageComponent } from './modules/crear-mision/pages/crear-mison-page/crear-mision-page.component';
import { MensajesPageComponent } from './modules/mensajes/pages/mensajes-page/mensajes-page.component';
import { MisionesPageComponent } from './modules/misiones/pages/misiones-page/misiones-page.component';
import { ReportesPageComponent } from './modules/reportes/pages/reporte-page/reportes-page.component';
import { SolicitudesPageComponent } from './modules/solicitudes/pages/solicitudes-page/solicitudes-page.component';
import { RolGuard } from './core/guards/rol.guard';
import { PageNotAuthorizedComponent } from './shared/page-not-authorized/page-not-authorized.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},

  {
    path:'login',
    component:LoginPageComponent
  },
  { 
    path:'register',
    component:RegisterPageComponent
  },
  { 
    path:'forgotpassword',
    component:ForgotPasswordPageComponent
  },
  { 
    path:'dashboard',
    component:DashboardPageComponent,
    canActivate:[authGuard, RolGuard],
    data:{expectedRoles:['Lider-ANBU','Lider-Aldea','Agente']}
  },
  { 
    path:'crear-mision',
    component:CrearMisionPageComponent,
    canActivate:[authGuard, RolGuard],
    data:{expectedRoles:['Lider-Aldea']}
  },
  { 
    path:'mensajes',
    component:MensajesPageComponent,
    canActivate:[authGuard, RolGuard],
    data:{expectedRoles:['Lider-ANBU','Agente']}
  },
  { 
    path:'misiones',
    component:MisionesPageComponent,
    canActivate:[authGuard, RolGuard],
    data:{expectedRoles:['Lider-ANBU','Lider-Aldea','Agente']}
  },
  { 
    path:'reportes',
    component:ReportesPageComponent,
    canActivate:[authGuard, RolGuard],
    data:{expectedRoles:['Lider-ANBU','Agente']}
  },
  { 
    path:'solicitudes',
    component:SolicitudesPageComponent,
    canActivate:[authGuard, RolGuard],
    data:{expectedRoles:['Lider-ANBU']}
  },
  { 
    path:'configuraciones',
    component:ConfiguracionesPageComponent,
    canActivate:[authGuard, RolGuard],
    data:{expectedRoles:['Lider-ANBU']}
  },
  //ruta para cuando no se está autorizado para acceder al recurso solicitado
  {
    path:'unauthorized',
    component:PageNotAuthorizedComponent
  },

  //ruta para cuando no se encuentra una ruta

  {path:'**',component:PageNotFoundComponent},

  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
