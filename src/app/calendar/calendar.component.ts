import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor() { }



activitaet:any = [{'name':'AG4','farbe':'#666666','description':''},{'name':'AG1','farbe':'#4186D3','description':''},{'name':'AG2','farbe':'#057D9F','description':''},{'name':'AG3','farbe':'#A0F06C','description':''}];

mes:any = 8;
ano:any = 2017;
mesplus(){
  return this.mes-1;
}
diasmes:any;
listadias:any = [];
listames:any = ['cero','Januar', 'Februar', 'März', 'April','Mai','Juni','Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']
listadia:any = ['Sonntag','Montag','Dienstag', 'Mittwoch','Donnerstag','Fritag', 'Sammstag'];
eventos:any =[{'akt':'AG1','datev':'20170801', 'dateend':'20170804','name':'Blabla', 'farbe':'#4186D3'},{'akt':'AG2','datev':'20170805', 'dateend':'20170820','name':'Blabla', 'farbe':'#4186D3'}, {'akt':'AG1','datev':'20170608', 'name':'Blabla', 'farbe':'#057D9F'},{'akt':'AG3','datev':'20170621', 'dateend':'20170625', 'name':'Blabla', 'farbe':'#A0F06C'},{'akt':'AG1','datev':'20170619', 'dateend':'20170621', 'name':'Blabla', 'farbe':'#A0F06C'}];
farbe:['#4186D3','#057D9F','#A0F06C', '#FFB100'];

calendario:any = [];

agname:any;
agfarbe:any;
agdesc:any;

addag(){
  let arreglo = {
    name : this.agname,
    farbe : this.agfarbe,
    description: this.agdesc
  }
  this.activitaet.push(arreglo);
  this.agname = "";
  this.agfarbe = "";
  this.agdesc = "";
}

diaok(jahr,monat,tag){

  console.log('recibido:'+jahr,monat,tag);
  if(tag<10 && this.mes<10){
  var fullfech = this.ano+'0'+monat+'0'+tag;
  } else if (tag>9 && monat<10){
  var fullfech = this.ano+'0'+monat+''+tag;
  } else if (tag>9 && monat>9){
  var fullfech = this.ano+''+monat+''+tag;
  }
  return fullfech;
}s

creames(mes){
  this.calendario = [];
  var monate = {
    num: mes,
    dias: []};
  var largo = this.daysInMonth(mes, this.ano);

for(var i=1; i<=largo; i++){
  let dia = {
    fecha: this.diaok(this.ano,mes,i),
    name: '',
    dia: i,
    aktivo: false
  };
  console.log(this.ano,mes,i);
  this.calendario.push(dia);
}
this.addaktiv();
}

addaktiv(){
  for(var i=0; i<this.eventos.length; i++){
    if(this.eventos[i].dateend){
       for(var u=0; u<this.calendario.length; u++){
      if(this.eventos[i].dateend===this.calendario[u].fecha){
        this.calendario[u].aktivo = true;
        for(let a in this.activitaet){
          this.activitaet[a].name;
          console.log(a);
          if(this.eventos[i].akt===this.activitaet[a].name){
            var name = this.activitaet[a].name;
            this.calendario[u][name] = true;
          }
        }
        console.log(this.calendario[u]);
      }
    }
  
     for(var u=0; u<this.calendario.length; u++){
      if(this.eventos[i].datev===this.calendario[u].fecha){
        this.calendario[u].aktivo = true;
        for(let a in this.activitaet){
          this.activitaet[a].name;
          console.log(a);
          if(this.eventos[i].akt===this.activitaet[a].name){
            var name = this.activitaet[a].name;
            this.calendario[u][name] = true;

          }
        }
        console.log(this.calendario[u]);
      }
    }

     for(var u=0; u<this.calendario.length; u++){
      if(this.eventos[i].datev<this.calendario[u].fecha && this.eventos[i].dateend>this.calendario[u].fecha){
        this.calendario[u].aktivo = true;
        for(let a in this.activitaet){
          this.activitaet[a].name;
          console.log(a);
          if(this.eventos[i].akt===this.activitaet[a].name){
            var name = this.activitaet[a].name;
            this.calendario[u][name] = true;

          }
        }
        console.log(this.calendario[u]);
      }
    }

    } else {
      for(var u=0; u<this.calendario.length; u++){
      if(this.eventos[i].datev===this.calendario[u].fecha){
        this.calendario[u].aktivo = true;
        for(let a in this.activitaet){
          this.activitaet[a].name;
          console.log(a);
          if(this.eventos[i].akt===this.activitaet[a].name){
            var name = this.activitaet[a].name;
            this.calendario[u][name] = true;

          }
        }
        console.log(this.calendario[u]);
      }
    }
    }

  }
}
/*newmonate:any = function(){
  for(i=1; i< ;i++)
  this.ano+''monate

}*/
tag:any = {'datum':1};

formatfech(dd){
  if(dd<10 && this.mes<10){
  var fullfech = this.ano+'0'+this.mes+'0'+dd;
  } else if (dd>9 && this.mes<10){
  var fullfech = this.ano+'0'+this.mes+''+dd;
  } else if (dd>9 && this.mes>9){
  var fullfech = this.ano+''+this.mes+''+dd;
  }
  return fullfech;
}

diaaktiv:any = function(dd){
  for(let itemev of this.eventos){
    /*console.log(itemev.datev+' igual a '+this.formatfech(dd));*/
    if(itemev.datev===this.formatfech(dd)){
      return true;
    } else {
      return false;
    }
  }
}

aktivo:any = function(arg, aktit){
  var numaktiv = [];
  numaktiv = this.eventos.filter(aqui=> aqui.datev===this.formatfech(arg) && aqui.akt===aktit);
  /*console.log(arg);*/
  if(numaktiv.length>0){
    return true;
  }
}

eldia:any = function(dd){
  var d = new Date(this.ano, this.mesplus(), dd);
  var e =  d.getDay();
  return this.listadia[e];
}

eldianum:any = function(dd){
  var d = new Date(this.ano, this.mesplus(), dd);
  /*console.log(d);*/
  var e =  d.getDay();
  return e;
}

namemes(){
return this.listames[this.mes];
};

daysInMonth:any = function(month,year) {
    return new Date(this.ano, this.mes, 0).getDate();
};
genarraydias:any = function(total){
  this.listadias = [];
  for(var i=1; i<=total; i++){
    this.listadias.push(i);
  }
}

simpledate:any = function(date){
  console.log('llego: '+date);
  var dategrup = date.split("-");
  console.log(dategrup);
  if(dategrup[1]<10){
  console.log(dategrup[1][1]);
  }
}

actualiza(){
    this.diasmes = this.daysInMonth();
    this.genarraydias(this.diasmes);
    this.creames(this.mes);
}

ngOnInit() {
    this.diasmes = this.daysInMonth();
    this.genarraydias(this.diasmes);
    this.simpledate('2017-05-06');
    this.creames(this.mes);
  }
}
