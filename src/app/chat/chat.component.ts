import { Component, OnInit } from '@angular/core';
import {ApisoftService} from '../services/apisoft.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  providers: [ApisoftService],
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  listachat:any;
  textchat:any;
  constructor(public apisoft: ApisoftService) {
   }

  dia = new Date();


   sendchat:any = function(){
    var obj = {"de":"usuario1",
     "a":"usuario3",
      "timechat": Date.now(),
      "txt": this.textchat
    };

    this.apisoft.newChat(obj);
    this.textchat = "";
   }
chattime:any = function(){
    this.apisoft.getChats().then(resp=>{
      this.listachat = resp;
      console.log(resp);
    });
}
  ngOnInit() {

    setTimeout(()=>{this.chattime()}, 2000);
  }
  

}
