import { Component, OnInit } from '@angular/core';
import { ApisoftService } from '../services/apisoft.service';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  providers: [ApisoftService],
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
listado: FirebaseListObservable<any[]>;
elitem: FirebaseObjectObservable<any>;
  constructor(public api: ApisoftService, db: AngularFireDatabase) {
    this.listado = db.list('/users/');
   }

username:any;
useremail:any;
usercode:any;
usergruppe:any;

clearuser(){
  this.username="";
  this.useremail="";
  this.usercode="";
  this.usergruppe="";
}

  removeItemFromList(key: string) {
    this.listado.remove(key).then(_ => console.log('item deleted!'));
  }



NewUser:any = function(){
  var userobject = {
    'name': this.username,
    'email': this.useremail,
    'code': this.usercode,
    'group': this.usergruppe
  }
  this.listado.push(userobject).then(()=>{
    this.clearuser();
  });
}


  ngOnInit() {
    console.log(this.listado);
  }

}
