import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './container/register/register.component';
export const ROUTE: any = [{ path: '', component: RegisterComponent }];
@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(ROUTE)],
    declarations: [RegisterComponent],
    providers: []
})
export class RegisterModule { }