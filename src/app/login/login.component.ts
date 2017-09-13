import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import {AuthService} from '../auth.service';
//import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
//import { moveIn } from '../router.animations';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [AuthService],
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  email:string;
  password:string;
  company:string = '';
  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  estadouser:any;
  constructor(public afAuth: AngularFireAuth, db: AngularFireDatabase, public auth: AuthService) {
    this.user = afAuth.authState;
    this.items = db.list('/projects');
    
  }

  logemail(){
    this.auth.emailSignUp(this.email, this.password);
  }
  loginemail(){
    this.auth.emailLogin(this.email, this.password);
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
     this.afAuth.auth.signOut();
  }

  ngOnInit() {

  }

}
