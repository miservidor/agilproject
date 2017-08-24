import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class ApisoftService {
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

  constructor(public db: AngularFireDatabase) {
    this.users= db.list('/users');
    this.user = db.object('/users');
    this.items = db.list('/users');
    this.item = db.object('/users');
    this.projects = db.list('/projects');
    this.project = db.object('/projects');
    this.tasks = db.list('/tasks');
    this.task = db.object('/tasks');
    this.clients = db.list('/clients');
    this.client = db.object('/clients');
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

getUsers:any = function(){
return Promise.resolve(this.users);
};

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
  var newtask = this.db.object('/tasks/'+code);
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
