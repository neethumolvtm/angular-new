import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Route } from '@angular/router';
//components
import { AuthFormComponent } from './container/auth-form/auth-form.component';
//services
//import { AuthServices } from './services/auth/auth.service';
@NgModule({
    imports:[CommonModule,ReactiveFormsModule ],
    declarations:[AuthFormComponent],
    exports:[AuthFormComponent],
    providers:[]
         })
 export class SharedModule{}