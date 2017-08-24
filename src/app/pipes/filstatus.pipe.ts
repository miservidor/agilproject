import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filstatus'
})
export class FilstatusPipe implements PipeTransform {

  transform(items: any[], args?: any): any {
            
    if (!items) return [];        
        return items.filter(it => it.statustask == args);
  }

}
