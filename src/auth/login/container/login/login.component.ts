import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})
export class LoginComponent {
    error: any;
    constructor(private authService: AuthService,
        private router: Router) { }
    async login(event: FormGroup) {
        const { email, password } = event.value;
        try {
            await this.authService.loginUser(email, password);
            this.router.navigate(['/']);
        } catch (err) {
            this.error = err.message;

        }
    }
}
