import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'horajs'
})
export class HorajsPipe implements PipeTransform {

  transform(value: any): any {
    if (value){
    var a = new Date(value);
    var hour = a.getHours();
    var minute = a.getMinutes();
    return hour+':'+minute;
    } else {
      return null;
    }

  }

}
