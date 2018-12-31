import { AuthService, User } from './../../../auth/shared/services/auth/auth.service';
import { Component } from '@angular/core';
import { Store } from 'store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription'
@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div>
      {{user$ | async | json}}
      <app-header></app-header>
      <app-nav></app-nav>
      <div class="wrapper">
      <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class AppComponent {
  user$: Observable<User>;
  subscription:Subscription;
  constructor(private store: Store,
    private authService: AuthService) { }
    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.subscription=this.authService.auth$.subscribe();
      this.user$=this.store.select('user');
    }
    ngOnDestroy(): void {
      //Called once, before the instance is destroyed.
      //Add 'implements OnDestroy' to the class.
      this.subscription.unsubscribe();

    }
}
