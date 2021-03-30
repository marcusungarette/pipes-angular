import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertMiles',
})
export class ConvertMilesPipe implements PipeTransform {
  transform(value: any, ...args: any[]): unknown {
    if (!value) {
      return '';
    }
    return value * 1.60934;
  }
}
