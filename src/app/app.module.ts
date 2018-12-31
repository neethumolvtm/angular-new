import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

// feature modules
import {AuthModule} from './../auth/auth.module';

// containers
import { AppComponent } from './containers/app/app.component';
import { AppNavComponent } from './components/app-nav/app-nav.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    AuthModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppNavComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

// <script src="https://www.gstatic.com/firebasejs/5.7.2/firebase.js"></script>
// <script>
//   // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyA8rCOjtr7EHEZSSg1Sks8ttxMVimYbah0",
//     authDomain: "fitnessnew.firebaseapp.com",
//     databaseURL: "https://fitnessnew.firebaseio.com",
//     projectId: "fitnessnew",
//     storageBucket: "fitnessnew.appspot.com",
//     messagingSenderId: "536193980886"
//   };
//   firebase.initializeApp(config);
// </script>