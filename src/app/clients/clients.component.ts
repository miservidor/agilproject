import { Component, OnInit } from '@angular/core';
import { ApisoftService } from '../services/apisoft.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  providers: [ApisoftService],
  styleUrls: ['./clients.component.css']

})
export class ClientsComponent implements OnInit {

idcli:any;
namecli:any;
addresscli:any;
citycli:any;
phonecli:any;
statuscli:any;
listaclients:any;

  constructor(public apisoft: ApisoftService) { }

Addclient:any = function(){

  var objclient = {
    'idcli' : this.idcli,
    'namecli': this.namecli,
    'addresscli': this.addresscli,
    'citycli': this.citycli,
    'phonecli':this.phonecli,
    'statuscli':this.statuscli
  }

  this.apisoft.NewClient(objclient).then(()=>{
  this.CleanClientList();
  console.log('client added!;');
  })

}

AddclientTest:any = function(){

    let objclient = {
    'idcli' : this.idcli,
    'namecli': this.namecli,
    'addresscli': this.addresscli,
    'citycli': this.citycli,
    'phonecli':this.phonecli,
    'statuscli':this.statuscli
  }
  this.apisoft.NewClient(objclient).then(()=>{
    this.CleanClientList();
    console.log('listo');});
}

CleanClientList:any = function(){
    this.idcli = "";
    this.namecli = "";
    this.addresscli = "";
    this.citycli = "";
    this.phonecli = "",
    this.statuscli = "";
}

  ngOnInit() {
  this.apisoft.getClient().then(clients=>{
    console.log(clients);
    this.listaclients = clients;
  });
  }

}
