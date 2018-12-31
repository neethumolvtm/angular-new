import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
//third-party
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { SharedModule } from './shared/shared.module';
export const firebaseConfig = {
    apiKey: "AIzaSyA8rCOjtr7EHEZSSg1Sks8ttxMVimYbah0",
    authDomain: "fitnessnew.firebaseapp.com",
    databaseURL: "https://fitnessnew.firebaseio.com",
    projectId: "fitnessnew",
    storageBucket: "fitnessnew.appspot.com",
    messagingSenderId: "536193980886"
};
export const ROUTE: any = [{
    path: 'auth',
    children: [
        { path: '', pathMatch: 'full', redirectTo: 'login' },
        { path: 'login', loadChildren: './login/login.module#LoginModule' },
        { path: 'register', loadChildren: './register/register.module#RegisterModule' }
    ]
}];
@NgModule({
    imports: [CommonModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
        SharedModule.forRoot(),
        AngularFireDatabaseModule,
        RouterModule.forChild(ROUTE)],
    declarations: [],
    providers: []
})
export class AuthModule { }