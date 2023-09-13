import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { GuardService } from './guard.service'; // Import your GuardService

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private guardService: GuardService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // Use the GuardService to check if the user is authenticated
    if (this.guardService.isLoggedIn()) {
      return true; // Allow access to the route
    } else {
      // Redirect to the login page if the user is not authenticated
      this.router.navigate(['login']);
      return false; // Prevent access to the route
    }
  }
}
