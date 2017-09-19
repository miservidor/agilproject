import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import {AuthService} from './auth.service';
//import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
//import { moveIn } from '../router.animations';
import * as firebase from 'firebase/app';

import {ApisoftService} from './services/apisoft.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ApisoftService, AuthService],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    user: Observable<firebase.User>;
    items: FirebaseListObservable<any[]>;
   constructor(
    db: AngularFireDatabase,
    public auth: AuthService,
    public apisoft: ApisoftService, 
    public afAuth: AngularFireAuth

  ) {
    this.items = db.list('/users');
    this.user = afAuth.authState;
  }

  modalshow:boolean = false;
      ngOnInit() {
  }

}
