import { Component, OnInit } from '@angular/core';
import { ApisoftService } from '../services/apisoft.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  providers: [ApisoftService],
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {


codpro:any;
namepro:any;
descpro;
startpro:any;
endpro:any;
userspro:any;

listprojects:any;
listusers:any;
  constructor(public apisoft: ApisoftService) {
   }

AddProject:any = function(){
var objproject = {
    'codpro':this.codpro,
    'namepro':this.namepro,
    'descpro':this.descpro,
    'startpro':this.startpro,
    'endpro':this.endpro,
    'userspro':this.usractivos(),
    'statuspro': 'activo'
  }

this.apisoft.NewProject(objproject);
};

usractivos:any = function(){
  var actv = [];
  for(var i=0; i<this.usuarios.length; i++){
    if(this.usuarios[i].active){
      actv.push(this.usuarios[i])
    }
  }
  return actv;
}
usuarios:any =[];

  ngOnInit() {
    this.apisoft.getProject().then(projects=>{
      this.listprojects = projects;
    });
    this.apisoft.getUsers().then(users=>{
      this.listusers = users;

     var otralist = users.subscribe(snapshot => {
  if(snapshot.length > 0){
  console.log(snapshot);
  }

  for(let i=0; i<snapshot.length; i++){
          console.log(i);
          var neuobj = {
            'usrname' : snapshot[i].name,
            'usrcod' : snapshot[i].$key,
            'active': false
          } 
          this.usuarios.push(neuobj);
        }
});

      /*for(let i=0; i<this.listusers.length; i++){
        console.log(i);
        var neuobj = {
          'usrname' : users[i].name,
          'usrcod' : users[i].$key
        } 
        this.usuarios.push(neuobj);
      }*/
      console.log(this.usuarios);
    });
  }

}
