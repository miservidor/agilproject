import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { ApisoftService } from '../services/apisoft.service';
import {MdDatepickerInputEvent,MdDatepicker} from '@angular/material';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  providers: [ApisoftService],
  styleUrls: ['./tasks.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksComponent implements OnInit {
    @ViewChild(MdDatepicker) datepicker: MdDatepicker<Date>;
    codtask:any = '';
    projecttask:any = '';
    nametask:any = '';
    desctask:any = '';
    dstarttask:any = '';
    dendtask:any = '';
    hstarttask:any = '';
    hendtask:any = '';
    colortask:any = '';
    userstask:any = '';
    statustask:any = 'todo';
    clientetask:any = '';

    dstart:any = new Date(this.dstarttask);

  /* TEST */
  touch: boolean;
  minDate: any;
  maxDate: any;

  listprojects:any;
  listtasks:any;
  constructor(public apisoft: ApisoftService) { }


AddTask:any = function(){
    var objtask = {

      'codtask':this.codtask,
      'projecttask':this.projecttask,
      'nametask':this.nametask,
      'desctask':this.desctask,
      'dstarttask':this.dstarttask,
      'dendtask':this.dendtask,
      'hstarttask':this.hstarttask,
      'hendtask':this.hendtask,
      'colortask':this.colortask,
      'userstask':'aa',
      'statustask':this.statustask,
      'clientetask':this.clientetask
  }
    console.log(objtask);
this.apisoft.NewTask(objtask);
}



  ngOnInit() {
        this.apisoft.getProject().then(projects=>{
      this.listprojects = projects;
    });
      this.apisoft.getTasks().then(tasks=>{
      this.listtasks = tasks;
    });
  }

}
