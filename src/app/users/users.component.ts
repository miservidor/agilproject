import { Component, OnInit } from '@angular/core';
import { ApisoftService } from '../services/apisoft.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  providers: [ApisoftService],
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

username:any = '';
useremail:any = '';
usercode:any = '';
usergruppe:any = '';

listusers:any;

  constructor(public apisoft: ApisoftService) {}

AddUser:any = function(){
  var userobject = {
    'name': this.username,
    'email': this.useremail,
    'code': this.usercode,
    'group': this.usergruppe,
    'status': 'waiting'
  }
  console.log(userobject);
  this.apisoft.NewUser(userobject);

}

removeItemFromList(key){
  this.apisoft.removeuser(key);
}

clearuser(){
  this.username="";
  this.useremail="";
  this.usercode="";
  this.usergruppe="";
}

  ngOnInit() {
    this.apisoft.getUsers().then(users=>{
      this.listusers = users;
    });
  }

}
