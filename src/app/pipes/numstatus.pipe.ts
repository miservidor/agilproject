import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numstatus'
})
export class NumstatusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    var neuvalue = []
    neuvalue = value;
    if(value){
      var num = 0;
      for(var i =0;i<value.length; i++){

        if(value[i].statustask==args){

          num=num+1;
        }
      }
      return num;
      } else {
        return num;
      }
    }

}
