import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth/auth.service';
@Component({
    moduleId: module.id,
    selector: 'register',
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.scss']
})
export class RegisterComponent {
    error: string;
    constructor(private authService: AuthService) { }
    async register(event: FormGroup) {
        const { email, password } = event.value;
        try {
            await this.authService.createUser(email, password);
        } catch(err){
            this.error = err.message;

        }
    }
}
