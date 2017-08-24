import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { RandomNumService} from '../random-num.service';

@Component({
  selector: 'app-lizenz',
  templateUrl: './lizenz.component.html',
  providers: [RandomNumService],
  styleUrls: ['./lizenz.component.css']
})

export class LizenzComponent implements OnInit {
    items: FirebaseListObservable<any[]>;
    item: FirebaseObjectObservable<any>;
   constructor(db: AngularFireDatabase, public random: RandomNumService) {
    this.items = db.list('/users');
    this.item = db.object('/users');
  }

idlizenz:any;
firma:string;
nbenutzer:any;
software:any;
version:any;
type:any;
email:any;
datumstart:any;
datumende:any;
//users:any[];
//default:any;
aktiv:boolean;


CleanList(){
this.idlizenz ="";
this.firma ="";
this.nbenutzer ="";
this.software ="";
this.version ="";
this.type ="";
this.email ="";
this.datumstart ="";
this.datumende ="";
}

NewLizenz:any = function(){
var LizObject = {
'idlizenz': this.idlizenz,
'firma': this.firma,
'nbenutzer': this.nbenutzer,
'software': this.software,
'version': this.version,
'type': this.version,
'email': this.email,
'datumstart': this.datumstart,
'datumende':this.datumende,
'aktiv':true
};
console.log(this.items);
this.items.push(LizObject).then(()=>{
  this.CleanList();
  this.websection = "listliz";
});
};
news(){
  console.log('boton esta ok');
}
neucod:any = function(){
  this.random.Genera().then((coduni)=>{
  this.idlizenz = coduni
})
}
websection:any = "listsoft";

  ngOnInit() {
  }

}
