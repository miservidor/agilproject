import { Component, OnInit } from '@angular/core';
import { ApisoftService } from '../services/apisoft.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  providers: [ApisoftService],
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
listtasks:any;

  constructor(public apisoft: ApisoftService) { }


  funciontime:any = function(){
      console.log('se refresco');
    this.apisoft.getTasks().then(tasks=>{
      this.listtasks = tasks;
      console.log('comienza');
    });
  }
  ngOnInit() {
    this.apisoft.getTasks().then(tasks=>{
      this.listtasks = tasks;
      console.log('comienza');
    });
    setTimeout(()=>{this.funciontime()}, 3000);
  }


}
