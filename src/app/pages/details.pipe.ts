import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'details',
  standalone: true
})
export class DetailsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
