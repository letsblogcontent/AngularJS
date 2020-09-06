import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipeappend'
})
export class CustompipeappendPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value + 'custompipe';
  }

}
