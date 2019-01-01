import { Component, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { User } from 'src/auth/shared/services/auth/auth.service';
import { EventEmitter } from 'events';

@Component({
    moduleId: module.id,
    selector: 'app-header',
    templateUrl: 'app-header.component.html',
    styleUrls: ['app-header.component.scss'],
    changeDetection:ChangeDetectionStrategy.OnPush

})
export class AppHeaderComponent {
    @Input() user:User;
    @Output() logoutData=new EventEmitter();
logout(){
this.logoutData.emit();
}
}
