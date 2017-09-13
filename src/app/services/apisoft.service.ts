import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Router } from "@angular/router";
import * as firebase from 'firebase';

@Injectable()
export class ApisoftService {
    logeduser: Observable<firebase.User>;
    users: FirebaseListObservable<any[]>;
    user: FirebaseObjectObservable<any>;
    items: FirebaseListObservable<any[]>;
    item: FirebaseObjectObservable<any>;
    projects: FirebaseListObservable<any[]>;
    project: FirebaseObjectObservable<any>;
    tasks: FirebaseListObservable<any[]>;
    task: FirebaseObjectObservable<any>;
    clients: FirebaseListObservable<any[]>;
    client: FirebaseObjectObservable<any>;
    usuario: FirebaseObjectObservable<any>;
    uiduser:string;

    constructor(public afAuth: AngularFireAuth, public db: AngularFireDatabase) {
      afAuth.authState.subscribe(info=>{
        this.uiduser = info.uid;
        console.log(this.uiduser);
      this.users= db.list('/group/'+this.uiduser+'/userauths');
      this.user = db.object('/group/'+this.uiduser+'/userauths');
      this.items = db.list('/group/'+this.uiduser+'/users');
      this.item = db.object('/group/'+this.uiduser+'/users');
      this.projects = db.list('/group/'+this.uiduser+'/projects');
      this.project = db.object('/group/'+this.uiduser+'/projects');
      this.tasks = db.list('/group/'+this.uiduser+'/tasks');
      this.task = db.object('/group/'+this.uiduser+'/tasks');
      this.clients = db.list('/group/'+this.uiduser+'/clients');
      this.client = db.object('/group/'+this.uiduser+'/clients');
      this.usuario = db.object('/users/'+this.uiduser);

      })
      //'/group/'+this.logeduser+
      }

    idsoft:any;
    softname:any;
    beschreibung:any;
    datumst:any;
    aktiv:boolean;

    idcli:any;
    namecli:any;
    addresscli:any;
    citycli:any;
    phonecli:any;
    statuscli:any;

Llamado:any = function (){
  console.log('alo alo!');
}

removeuser:any = function(clave){
this.users.remove(clave);
}

NewUser:any = function(obj){
  var UserObject = {
    'name': obj.name,
    'email': obj.email,
    'code': obj.code,
    'group': obj.group
    }
  console.log(obj);
  this.users.push(obj);
}

getUsers:any = function(){
return Promise.resolve(this.users);  
}

NewClient:any = function(obj){
  var ClientObject = {
    'idcli':obj.idcli,
    'namecli':obj.namecli,
    'addresscli':obj.addresscli,
    'citycli':obj.citycli,
    'phonecli':obj.phonecli,
    'statuscli':obj.statuscli
  }
  this.clients.push(ClientObject);
  return Promise.resolve();

}

getClient:any = function(){
return Promise.resolve(this.clients);
};

getUsuario:any = function(){
  console.log('enviando datos usuario');
  return Promise.resolve(this.usuario);
}


NewProject:any = function(obj){
  var ProjectObject = {
    'codpro':obj.codpro,
    'namepro':obj.namepro,
    'descpro':obj.descpro,
    'startpro':obj.startpro,
    'endpro':obj.endpro,
    'userspro':obj.userspro,
    'statuspro':obj.statuspro
  }
  this.projects.push(ProjectObject);
  return Promise.resolve();

}

getProject:any = function(){
  return Promise.resolve(this.projects);
}

NewTask:any = function(obj){
  var TaskObject = {

      'codtask':obj.codtask,
      'projecttask':obj.projecttask,
      'nametask':obj.nametask,
      'desctask':obj.desctask,
      'dstarttask':obj.dstarttask,
      'dendtask':obj.dendtask,
      'hstarttask':obj.hstarttask,
      'hendtask':obj.hendtask,
      'colortask':obj.colortask,
      'userstask':obj.userstask,
      'statustask':obj.statustask,
      'clientetask':obj.clientetask

  }
  this.tasks.push(TaskObject);
  return Promise.resolve();
}

changestatus(code, state){
  var newtask = this.db.object('/group/'+this.uiduser+'/'+'/tasks/'+code);
  newtask.update({'statustask':state});
}


getTasks:any = function(){
  return Promise.resolve(this.tasks);
}



CleanList(){
this.idsoft="";
this.softname="";
this.beschreibung="";
this.datumst="";
}

AddUser:any = function(objeto){
  this.items.push(objeto);
    return Promise.resolve();
}

AddProject:any = function(objeto){
  this.projects.push(objeto);
    return Promise.resolve();
}

NewSoftware:any = function(){
  var SoftObject = {
    'idsoft':this.idsoft,
    'softname':this.softname,
    'beschreibung':this.beschreibung,
    'datumst':this.datumst
  }
  this.items.push(SoftObject).then(()=>{
  this.CleanList();
  this.websection = "listsoft";
});
}



CleanClientList:any = function(){
    this.idcli = "";
    this.namecli = "";
    this.addresscli = "";
    this.citycli = "";
    this.phonecli = "",
    this.statuscli = "";
}

}
