import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-menulat',
  templateUrl: './menulat.component.html',
  providers: [AngularFireAuth],
  styleUrls: ['./menulat.component.css']
})
export class MenulatComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth) { }

  mainbut:any = 'dashboard';
  mainmenu:any = 'home';
  menuexpand:boolean = true;
  
  logout() {
     this.afAuth.auth.signOut();
  }

    isAuth() {
      this.afAuth.auth.currentUser.email;
  }
  ngOnInit() {
  }


}
