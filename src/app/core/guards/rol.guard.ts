import { inject } from '@angular/core';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';


export const RolGuard = (route: ActivatedRouteSnapshot) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const expectedRoles: string[] | undefined = route.data['expectedRoles'];
  const userRole: string | null = authService.getRole();

   // Verifica que expectedRoles esté definido y userRole no sea null
   if (!expectedRoles || !userRole || !expectedRoles.includes(userRole)) {
    router.navigate(['/unauthorized']);
    return false;
  }

  return true;
};
