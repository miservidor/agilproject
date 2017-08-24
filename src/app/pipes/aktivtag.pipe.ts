import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'aktivtag'
})
export class AktivtagPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value);
    return null;
  }

}
