import { Injectable } from '@angular/core';

@Injectable()
export class RandomNumService {

  constructor() {
    console.log('Hello RandomNumProvider Provider');
  }

PUSH_CHARS:any = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
CODEJG:any= "-ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";

makeid(){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
};

consoles:any = function(){


console.log('largo:',this.CODEJG.length);

console.log(this.CODEJG.indexOf('a'));
}


fecha:any = new Date().getDate();
mes(){
        var pre = new Date().getMonth();
        //javascript Januar = 0
        var dig = pre+1; 
        console.log('mes:'+dig);
        if(dig<10){
            return "0"+dig;
        } else {
            return dig;
        }
    };
dia(){
        var dig = new Date().getDate();
        console.log('dia:'+dig);
        if(dig<10){
            return "0"+dig;
        } else {
            return dig;
        }
    };

horas(){
        var dig = new Date().getHours();
        if(dig<10){
            return "0"+dig;
        } else {
            return dig;
        }
    };
mins(){
        var dig = new Date().getMinutes();
        if(dig<10){
            return "0"+dig;
        } else {
            return dig;
        }
    };
segs(){
        var dig = new Date().getSeconds();
        if(dig<10){
            return "0"+dig;
        } else {
            return dig;
        }
    };
millisegs(){
        var dig = new Date().getMilliseconds();
        if(dig<10){
            return "00"+dig;
        } else if (dig>=10 && dig<100) {
            return "0"+dig;            
        } else if(dig===0) {
            return "000";
        }
        else {
           return dig;
        }
    };


jahr:any = new Date().getFullYear();

timejetzt:any = function(){ return ""+this.jahr+this.mes()+this.dia()+this.horas()+this.mins()+this.segs()+this.millisegs()+0;
}

Getcodejg(tstamp) {
    console.log(tstamp);
    var CODEJG= "-ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
    var largo = tstamp.length;
    function tobuch(num){
        if (num[0]==0){
        var segnum = num[1]; 
        return CODEJG[segnum];          
        } else {
        return CODEJG[num]
        }
    }
    var neucod = "";
    for(var i=0; i < largo; i+=2)
    {
        var stampar = "" + tstamp[i]+tstamp[i+1];
        if(stampar<"54"){
            var lett = tobuch(stampar);
            console.log('par:'+i+'is :'+ stampar);
        } else {
            var lett = stampar;
            console.log('par:'+i+'is :'+ stampar);
        };
        neucod = ""+ neucod + lett;
    }
    return neucod+this.makeid();
};

Genera(){
var coduni = this.Getcodejg(this.timejetzt());
  return Promise.resolve(coduni);
}


}
