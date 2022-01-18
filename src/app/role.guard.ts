import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';



@Injectable({
    providedIn: 'root'
})
export class RoleGuard implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        let Role = localStorage.getItem('role_name');
        if (Role == 'ADMIN') {
            return true;
        }
        alert(`You don't have this right.`);
        return false;
    }
}
// Source: https://www.youtube.com/watch?v=pZn8mCAuBDU&ab_channel=Let%27sProgram