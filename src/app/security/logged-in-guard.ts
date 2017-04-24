import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SecurityService } from '../security.service';

@Injectable()

export class LoggedInGuard implements CanActivate {

    constructor(private router: Router, private securityService: SecurityService) {

    }
    canActivate(): boolean {
        const ok: boolean = this.securityService.isLoggedIn();
        if (!ok) {
            this.router.navigate(['/login']);
        }
        return ok;
    }
}
