import { Component, OnInit } from '@angular/core';
import { ApisoftService } from '../services/apisoft.service';


@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  providers: [ApisoftService],
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
listtasks:any;
  constructor(public apisoft: ApisoftService) { }

  ChangeStatus:any = function(code, state){
      this.apisoft.changestatus(code, state);
  }
  ngOnInit() {
          this.apisoft.getTasks().then(tasks=>{
      this.listtasks = tasks;
    });
  }

}
