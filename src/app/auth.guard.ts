import { AuthService } from './auth.service';
import { Emitters } from './emitters/emitters';
import { Injectable, OnInit } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, OnInit {
    authenticated = true;

    constructor(
        private authService: AuthService,
        private router: Router
    ) {

    }

    ngOnInit(): void {
        Emitters.authEmitter.subscribe(
            (auth: boolean) => {
                this.authenticated = auth;
            }
        )
    }

    canActivate
        (route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
        : boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

        if (this.authService.IsLoggedIn()) {
            return true;
        }

        this.router.navigate(['login']);
        return this.authService.IsLoggedIn();
    }

}