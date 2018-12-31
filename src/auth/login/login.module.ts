import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './container/login/login.component';
export const ROUTE: any = [{ path: '', component: LoginComponent }];
@NgModule({
    imports: [CommonModule,
        SharedModule,
        RouterModule.forChild(ROUTE)],
    declarations: [LoginComponent],
    providers: []
})
export class LoginModule { }